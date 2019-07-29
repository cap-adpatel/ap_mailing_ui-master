import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportsComponent} from './components/reports/reports.component';
import {PreanalyticInfoPipe} from './pipes/preanalytic-info.pipe';
import {LabFilesPipe} from './pipes/lab-files.pipe';
import {VendorFilesPipe} from './pipes/vendor-files.pipe';
import {ResultsInfoPipe} from './pipes/results-info.pipe';

import {SharedModule} from '../shared/shared.module';
import {CapAuditModalComponent} from './components/widgets/cap-audit-modal/cap-audit-modal.component';
import {CapApprovalModalComponent} from './components/widgets/cap-approval-modal/cap-approval-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ReportsComponent,
    PreanalyticInfoPipe,
    LabFilesPipe,
    VendorFilesPipe,
    ResultsInfoPipe,
    CapAuditModalComponent,
    CapApprovalModalComponent
  ],
  providers: [
    PreanalyticInfoPipe,
    LabFilesPipe,
    VendorFilesPipe,
    ResultsInfoPipe
  ],
  entryComponents: [
    CapAuditModalComponent,
    CapApprovalModalComponent
  ],
  exports: [
    ReportsComponent
  ]
})
export class AdminModule {
}
