import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    this.fg = this.createForm();
  }

  /**
   * @description Creates a form with null value and required validators by default depending upon
   * the data
   * @param none
   * @returns `FormGroup`
   */
  private createForm(): FormGroup {
    const control = {};
    Object.keys(this.fields).forEach((field) => {
      control[field] = [
        { value: null, disabled: this.fields[field]?.disabled },
      ];
      this.fields[field]?.required
        ? Validators.required
        : Validators.nullValidator;
    });
    return new FormBuilder().group(control);
  }

  /**
   * Does things on submitting form value
   * @returns `void`
   */
  onSubmit(): void {
    console.log(this.fg.getRawValue());
  }
}
