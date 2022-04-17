import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  startWith,
  Subscription,
} from 'rxjs';
import { Fields } from '../../interface/common';
import { subjectAction } from '../../state/description.action';
import { descriptionSelector } from '../../state/description.selector';

@Component({
  selector: 'report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() severityOptions: string[];
  @Input() statusOptions: string[];
  @Input() fields: Fields;
  @ViewChild('subject') subjectField: ElementRef;
  private _subscription: Subscription;

  fg: FormGroup;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fg = this.createForm();
    this.store.select(descriptionSelector).subscribe((description) => {
      this.fg.patchValue(description);
    });
  }

  ngAfterViewInit(): void {
    this._updateSubjectStore();
    
  }

  /**
   * @description on every key store or paste the store will get update
   * @returns `void`
   */
  private _updateSubjectStore(): void {
    const inputField = this.subjectField?.nativeElement as HTMLInputElement;
    const keyUp$ = fromEvent<any>(inputField, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged()
    );

    keyUp$.subscribe((value) => {
      let subject: string = value;
      this.store.dispatch(subjectAction({ subject }));
    });
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

  ngOnDestroy(): void {
    // this._subscription.unsubscribe();
  }
}
