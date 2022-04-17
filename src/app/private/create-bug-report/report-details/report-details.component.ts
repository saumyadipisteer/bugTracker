import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fields } from '../../interface/common';

@Component({
  selector: 'report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  @Input() severityOptions: string[];
  @Input() statusOptions: string[];
  @Input() fields: Fields;
  
  fg: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  private createForm(): FormGroup{
    const control = {};
    
    return new FormBuilder().group(control);
  }
}
