import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  @Input() severityOptions: string[];
  @Input() statusOptions: string[];
  constructor() {}

  ngOnInit(): void {}
}
