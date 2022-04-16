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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const primeng = [
  StepsModule,
  ButtonModule,
  InputTextModule,
  InputNumberModule,
  CardModule,
  DropdownModule,
];

@NgModule({
  declarations: [
    PrivateComponent,

    CreateBugReportComponent,
    ReportDetailsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    BrowserAnimationsModule,
    ...primeng,
  ],
})
export class PrivateModule {}
