import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CapApprovalModalComponent} from './cap-approval-modal.component';

describe('CapApprovalModalComponent', () => {
  let component: CapApprovalModalComponent;
  let fixture: ComponentFixture<CapApprovalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapApprovalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapApprovalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
