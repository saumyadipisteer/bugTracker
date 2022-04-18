import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interface/user';
import { ConfirmationService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
// import { IngredientListComponent } from '../../ingredient/ingredient-list/ingredient-list.component';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/app/interface/report';
import { CreateBugReportComponent } from 'src/app/private/create-bug-report/create-bug-report.component';
import { Store } from '@ngrx/store';
import { descriptionSelector } from 'src/app/private/state/description/description.selector';
import { Observable } from 'rxjs';
import { Description } from 'src/app/private/interface/description';
import { addReport } from 'src/app/state/report-state/report.action';
import { descriptionAction } from 'src/app/private/state/description/description.action';

@Component({
  selector: 'bug-list-table',
  templateUrl: './bug-list-table.component.html',
  styleUrls: ['./bug-list-table.component.scss'],
  providers: [DialogService, DynamicDialogConfig],
})
export class BugListTableComponent implements OnInit {
  description: Description;
  reports: Report[];
  ref: DynamicDialogRef;
  constructor(
    private dialogService: DialogService,
    private reportService: ReportService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.reportService.getReports().subscribe((reports) => {
      this.reports = reports;
    });
  }

  viewBugReport(description: Description) {
    this.store.dispatch(descriptionAction({ description }));
    this.ref = this.dialogService.open(CreateBugReportComponent, {
      width: '40%',
      data: { report: description },
    });
  }
}
