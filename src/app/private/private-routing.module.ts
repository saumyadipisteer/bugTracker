import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBugReportComponent } from './create-bug-report/create-bug-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: CreateBugReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
