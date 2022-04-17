import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bug-report',
  templateUrl: './create-bug-report.component.html',
  styleUrls: ['./create-bug-report.component.scss'],
})
export class CreateBugReportComponent implements OnInit {
  field = {
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
  };
  severityOptions: string[] = ['--Select--', 'Low', 'Medium', 'High']; //- TODO: must come from an API
  statusOptions: string[] = ['--Select--', 'Open', 'TBD']; //- TODO: More option for depending on role
  constructor() {}

  ngOnInit(): void {}
}
