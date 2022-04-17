import {
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
  Subscription,
} from 'rxjs';
import { Fields } from '../../interface/common';
import { Description } from '../../interface/description';
import { descriptionAction } from '../../state/description.action';
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
  @ViewChild('status') statusField: ElementRef;
  private _subscription: Subscription = new Subscription();

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
    //this._updateDescriptionStore();
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

    this._subscription.add(
      keyUp$.subscribe((value) => {
        let description: Description = this.fg.getRawValue();
        this.store.dispatch(descriptionAction({ description }));
      })
    );
  }

  /**
   * @description on every key store or paste the store will get update
   * @returns `void`
   */
  updateDescriptionStore(value: string): void {
    let description: Description = this.fg.getRawValue();
    this.store.dispatch(descriptionAction({ description }));
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
    this._subscription.unsubscribe();
  }
}
