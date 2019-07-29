import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-cap-audit-modal',
  templateUrl: './cap-audit-modal.component.html',
  styleUrls: ['./cap-audit-modal.component.css']
})
export class CapAuditModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CapAuditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  @Input() submitted = false;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.dialogRef.close(this.submitted);
  }

  getModalHeader() {
    return `Kit history for ${this.data.kitStatus.kitId}`;
  }

}
