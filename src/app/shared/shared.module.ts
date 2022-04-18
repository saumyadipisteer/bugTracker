import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugListTableComponent } from './bug-list/bug-list-table/bug-list-table.component';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';

const primengModules = [
  TableModule,
  ButtonModule,
  CardModule,
  OverlayPanelModule,
];

@NgModule({
  declarations: [SharedComponent, BugListComponent, BugListTableComponent],
  imports: [CommonModule, SharedRoutingModule, ...primengModules],
})
export class SharedModule {}
