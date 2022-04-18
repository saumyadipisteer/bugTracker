import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { CreateBugReportComponent } from './create-bug-report/create-bug-report.component';
import { ReportDetailsComponent } from './create-bug-report/report-details/report-details.component';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StoreModule } from '@ngrx/store';
import { descriptionReducer } from './state/description/description.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeMessageComponent } from './recipe-message/recipe-message.component';

const primeng = [
  StepsModule,
  ButtonModule,
  InputTextModule,
  InputNumberModule,
  CardModule,
  DropdownModule,
  CalendarModule,
  InputTextareaModule,
];

@NgModule({
  declarations: [
    PrivateComponent,
    CreateBugReportComponent,
    ReportDetailsComponent,
    RecipeMessageComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...primeng,
    StoreModule.forFeature('description',descriptionReducer),
  ],
})
export class PrivateModule {}
