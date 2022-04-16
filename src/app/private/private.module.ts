import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientListComponent } from './ingredient/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './ingredient/ingredient-form/ingredient-form.component';
import { RecipeMessageComponent } from './recipe-message/recipe-message.component';
import { CreateBugReportComponent } from './create-bug-report/create-bug-report.component';
import { ReportDetailsComponent } from './create-bug-report/report-details/report-details.component';




@NgModule({
  declarations: [
    PrivateComponent,
    IngredientComponent,
    IngredientListComponent,
    IngredientFormComponent,
    RecipeMessageComponent,
    CreateBugReportComponent,
    ReportDetailsComponent,
  ],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateModule {}
