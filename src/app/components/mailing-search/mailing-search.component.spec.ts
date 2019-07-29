import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MailingSearchComponent} from './mailing-search.component';

describe('MailingSearchComponent', () => {
  let component: MailingSearchComponent;
  let fixture: ComponentFixture<MailingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailingSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
