import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBugReportComponent } from './create-bug-report.component';

describe('CreateBugReportComponent', () => {
  let component: CreateBugReportComponent;
  let fixture: ComponentFixture<CreateBugReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBugReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBugReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
