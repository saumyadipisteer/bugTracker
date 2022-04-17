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
  ],
  imports: [CommonModule, PrivateRoutingModule, ...primeng],
})
export class PrivateModule {}
