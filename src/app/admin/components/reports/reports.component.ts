import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ContentService } from '../../../services/content.service';
import { CcsService } from '../../../services/ccs.service';
import { PtAdminService } from '../../services/pt-admin.service';
import { forkJoin } from 'rxjs';
import { CapAuditModalComponent } from '../widgets/cap-audit-modal/cap-audit-modal.component';
import { CapApprovalModalComponent } from '../widgets/cap-approval-modal/cap-approval-modal.component';
import { PreanalyticInfoPipe } from '../../pipes/preanalytic-info.pipe';
import { LabFilesPipe } from '../../pipes/lab-files.pipe';
import { VendorFilesPipe } from '../../pipes/vendor-files.pipe';
import { ResultsInfoPipe } from '../../pipes/results-info.pipe';
import { MailingOverview } from '../../../classes/mailing-overview';
import { ExcelService } from '../../../excel.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent implements OnInit, AfterViewInit {

  capAuditDialogRef: MatDialogRef<CapAuditModalComponent>;
  capApprovalDialogRef: MatDialogRef<CapApprovalModalComponent>;
  mailingOverview: MailingOverview;
  showLoading = false;
  showExportExcelMsg = '';
  approvalSucceeded = false;
  approvalFailed = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  filterValues = { name: '' };
  displayedColumns: string[] = [
    'capNumber',
    'kitId',
    'program',
    'preanalyticInfo',
    'labFiles',
    'vendorFiles',
    'resultsInfo'
  ];

  content: null;
  contentGroupId: null;

  constructor(
    private contentService: ContentService,
    private elementRef: ElementRef,
    private insilicoService: PtAdminService,
    private ccsService: CcsService,
    private dialog: MatDialog,
    private preanalyticInfo: PreanalyticInfoPipe,
    private labFiles: LabFilesPipe,
    private vendorFiles: VendorFilesPipe,
    private resultsInfo: ResultsInfoPipe,
    private excelService: ExcelService
  ) {
    this.contentGroupId = elementRef.nativeElement.tagName.toLowerCase();
    this.dataSource.filterPredicate = this.tableFilter();
  }

  ngOnInit() {
    this.loadContent();
  }

  ngAfterViewInit() {
  }

  tableFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.capNumber.toLowerCase().startsWith(searchTerms.name);
    };
    return filterFunction;
  }

  onViewAuditTriggered = (kitStatus) => {
    this.capAuditDialogRef = this.dialog.open(CapAuditModalComponent, {
      width: '900px',
      height: 'auto',
      data: { kitStatus }
    });
    this.capAuditDialogRef.afterClosed().subscribe(result => {
    });
  };

  onViewApprovalTriggered = () => {
    this.capApprovalDialogRef = this.dialog.open(CapApprovalModalComponent, {
      width: '500px',
      height: 'auto',
      data: this.mailingOverview
    });
    this.capApprovalDialogRef.afterClosed().subscribe(result => {
      this.approvalFailed = this.capApprovalDialogRef.componentInstance.approvalFailed;
      this.approvalSucceeded = this.capApprovalDialogRef.componentInstance.approvalSucceeded;

      setTimeout(() => {
        this.approvalFailed = false;
        this.approvalSucceeded = false;
      }, 5000);
    });
  };

  onKitFilterChange = (name: string) => {
    this.filterValues.name = name;
    this.dataSource.filter = JSON.stringify(this.filterValues);
  };

  loadMailingData = (mailingOverview: MailingOverview) => {
    this.dataSource.data = [];
    this.showLoading = true;
    this.mailingOverview = mailingOverview;
    const mailingId = mailingOverview.mailingId;
    const summaryListObservable = this.insilicoService.getMailingDetails(mailingId);
    const fileListObservable = this.ccsService.getFileList(mailingId);
    const mergedObservable = forkJoin(
      summaryListObservable,
      fileListObservable
    );
    const someData = [];
    mergedObservable
      .subscribe(
        (resp) => {
          this.showLoading = false;
          const md = resp[0];
          const fileList = resp[1];
          md.kitStatuses.forEach(ks => {
            ks.starterFiles = fileList.filter(f => {
              return (f.kitId === ks.kitId && f.uploadType.startsWith('starter'));
            });
            ks.mutagenizedFiles = fileList.filter(f => {
              return (f.kitId === ks.kitId && f.uploadType.startsWith('vendor'));
            });
            ks.preanalyticInfo = this.preanalyticInfo.transform(ks);
            ks.labFiles = this.labFiles.transform(ks.starterFiles);
            ks.vendorFiles = this.vendorFiles.transform(ks.mutagenizedFiles, ks.starterFiles.length);
            ks.resultsInfo = this.resultsInfo.transform(ks);
            ks.mailingItemId = this.mailingOverview.mailingItemId;

            someData.push(ks);
          });
          this.dataSource.data = someData;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.showExportExcelMsg = this.dataSource.data.length > 0 ? '' : 'Please select the Mailing';
        });
  };

  private loadContent = () => {
    this.showExportExcelMsg = this.dataSource.data.length > 0 ? '' : 'Please select the Mailing';
    this.contentService.loadContentFile()
      .subscribe(
        (resp) => {
          this.content = resp['app-reports'];
        });
  }

  exportAsXLSX(): void {
    if (this.dataSource.data.length > 0) {
      this.excelService.exportAsExcelFile(this.dataSource.data, 'excel');
      this.showExportExcelMsg = '';
    }
  }
  // export to excel
}