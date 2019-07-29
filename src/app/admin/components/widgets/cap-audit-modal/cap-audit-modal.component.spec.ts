import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CapAuditModalComponent} from './cap-audit-modal.component';

describe('CapAuditModalComponent', () => {
  let component: CapAuditModalComponent;
  let fixture: ComponentFixture<CapAuditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapAuditModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapAuditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
