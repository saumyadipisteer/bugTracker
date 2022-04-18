import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugReportPopupComponent } from './bug-report-popup.component';

describe('BugReportPopupComponent', () => {
  let component: BugReportPopupComponent;
  let fixture: ComponentFixture<BugReportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugReportPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugReportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
