import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PtAdminService} from '../../../services/pt-admin.service';
import {MailingAuditUpdate} from '../../../../classes/mailing_audit-update';

@Component({
  selector: 'app-cap-approval-modal',
  templateUrl: './cap-approval-modal.component.html',
  styleUrls: ['./cap-approval-modal.component.css']
})
export class CapApprovalModalComponent implements OnInit {

  approvalSucceeded = false;
  approvalFailed = false;
  showLoading = false;

  constructor(
    private ptAdminService: PtAdminService,
    private dialogRef: MatDialogRef<CapApprovalModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  @Input() submitted = false;
  
 
  ngOnInit() {
  }

  approve() {
    this.showLoading = true;
    const mailingAuditUpdate = new MailingAuditUpdate();
    const mailingId = this.data.mailingId;
    console.log(`approved mailing id ${mailingId}`);
    mailingAuditUpdate.mailingId = mailingId;
    mailingAuditUpdate.pageStatusCode = '7';
    this.ptAdminService.provideMailingApproval(mailingId, mailingAuditUpdate)
      .subscribe( rsp => {
        console.log('rsp occurred', rsp);
        this.showLoading = false;
        if (rsp.status === 200) {
          this.approvalSucceeded = true;
          this.dialogRef.close();
        } else {
          this.approvalFailed = true;
          this.dialogRef.close();
        }
      }, err => {
        console.log('error occurred');
        this.showLoading = false;
        this.approvalFailed = true;
        this.dialogRef.close();
      });
    
  }
}
