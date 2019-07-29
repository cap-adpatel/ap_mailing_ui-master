import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UnauthorizedLandingComponent} from './unauthorized-landing.component';

describe('UnauthorizedLandingComponent', () => {
  let component: UnauthorizedLandingComponent;
  let fixture: ComponentFixture<UnauthorizedLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
