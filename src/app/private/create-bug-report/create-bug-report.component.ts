import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bug-report',
  templateUrl: './create-bug-report.component.html',
  styleUrls: ['./create-bug-report.component.scss'],
})
export class CreateBugReportComponent implements OnInit {
  severityOptions: string[] = ['--Select--', 'Low', 'Medium', 'High']; //- TODO: must come from an API
  constructor() {}

  ngOnInit(): void {}
}
