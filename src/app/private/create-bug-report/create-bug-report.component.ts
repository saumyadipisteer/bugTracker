import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { WidgetField } from '../interface/common';
import { Description } from '../interface/description';
import { descriptionSelector } from '../state/description/description.selector';

@Component({
  selector: 'app-create-bug-report',
  templateUrl: './create-bug-report.component.html',
  styleUrls: ['./create-bug-report.component.scss'],
  providers:[DynamicDialogConfig]
})
export class CreateBugReportComponent implements OnInit {
  fields: WidgetField = {
    details: {
      subject: {
        label: 'Subject',
        field: 'subject',
        required: true,
        disabled: false,
      },
      severity: {
        label: 'Severity',
        field: 'severity',
        required: true,
        disabled: false,
      },
      status: {
        label: 'Status',
        field: 'severity',
        required: true,
        disabled: false,
      },
      describeTheBug: {
        label: 'Describe the bug',
        field: 'describeTheBug',
        required: false,
        disabled: false,
      },
    },
  };
  severityOptions: string[] = ['--Select--', 'Low', 'Medium', 'High']; //- TODO: must come from an API
  statusOptions: string[] = ['--Select--', 'Open', 'TBD']; //- TODO: More option for depending on role
  constructor(private config: DynamicDialogConfig, private store: Store) {}
  description: Description;
  ngOnInit(): void {
    console.log(this.config.data?.report)

    this.store.select(descriptionSelector).subscribe((description) => {
      this.description = description;
    });
  }
}
