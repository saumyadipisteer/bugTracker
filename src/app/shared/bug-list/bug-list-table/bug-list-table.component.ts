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

@Component({
  selector: 'bug-list-table',
  templateUrl: './bug-list-table.component.html',
  styleUrls: ['./bug-list-table.component.scss'],
  providers: [DialogService, DynamicDialogConfig],
})
export class BugListTableComponent implements OnInit {
  reports: Report[];
  ref: DynamicDialogRef;
  constructor(
    private dialogService: DialogService,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.reportService.getReports().subscribe((reports) => {
      console.log(reports)
      this.reports = reports;
    });
  }

  // viewIngredients(ingredients: Ingredient[]) {
  //   this.ref = this.dialogService.open(IngredientListComponent, {
  //     header: "Add Ingredient",
  //     width: '70%',
  //     data: { ingredients: ingredients, listType: 'view' },
  //   });
  // }
}
