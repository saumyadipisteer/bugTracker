import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Fields, Ingredient, Unit } from 'src/app/interface/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { addIngredient } from 'src/app/state/ingredient-state/ingredient.action';

@Component({
  selector: 'ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
  providers: [DynamicDialogRef],
})
export class IngredientFormComponent implements OnInit, OnDestroy {
  formVisuals = {
    title: 'Add ingredient',
    buttonLabel: 'Add',
  };

  index: number;
  @Input() currentHeight: string;
  @Input() currentWidth: string;

  @Input() set editableData(value: any) {
    if (value) {
      this.fg.patchValue(value?.data);
      this.index = value.index;
      (this.formVisuals.buttonLabel = 'Edit'),
        (this.formVisuals.title = 'Edit ingredient');
    }
  }
  ingredients: Ingredient[] = [];
  fg: FormGroup;

  fields: Fields = {
    name: {
      field: 'name',
      label: 'Ingredient Name',
      required: true,
      disabled: false,
    },
    quantity: {
      field: 'quantity',
      label: 'Quantity',
      required: true,
      disabled: false,
    },
    unit: {
      field: 'unit',
      label: 'Unit',
      required: true,
      disabled: false,
    },
  };

  unit: string[] = [
    '',
    'kg',
    'g',
    'mg',
    'ltr',
    'ml',
    'pc',
    'pcs',
    'teaspoon',
    'tablespoon',
    'cup',
    'cups',
  ];

  selectedUnit: Unit;

  constructor(
    private ingredientService: IngredientService,
    private dialogService: DialogService,
    private ref: DynamicDialogRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.fg = this.createForm();
  }

  /**
   * Creates null value form
   * @returns FormGroup
   */
  private createForm(): FormGroup {
    const controls = {};
    Object.keys(this.fields).forEach((field) => {
      controls[field] = [
        {
          value: null,
          disabled: this.fields[field]?.disabled,
        },
        [
          this.fields[field].required
            ? Validators.required
            : Validators.nullValidator,
        ],
      ];
    });
    return new FormBuilder().group(controls);
  }

  /**
   * Stores value and resets the form on success
   * @param none
   * @returns void
   */
  onSubmit(type: string): void {
    this.fg.markAsTouched();
    const ingredient: Ingredient[] = [this.fg.getRawValue()];
    this.store.dispatch(addIngredient({ ingredient }));
   
    // if (type === 'Add') {
    //   this.ingredients.push(this.fg.getRawValue());
    //   this.ingredientService.setIngredients(this.ingredients);
    // } else {
    //   this.ingredients = JSON.parse(
    //     localStorage.getItem('ingredients') || '{}'
    //   );
    //   this.ingredients[this.index] = this.fg.getRawValue();
    //   localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    //   this.ingredientService.ingredientSubject$.next(this.ingredients);
    //   this.formVisuals.buttonLabel = 'Add';
    //   this.formVisuals.title = 'Add ingredients';
    // }
  
    this.fg.reset();
  }

  ngOnDestroy(): void {
    this.ref.close();
  }


}
