import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Fields, Ingredient, Unit } from 'src/app/interface/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { addIngredient } from 'src/app/state/ingredient-state/ingredient.action';

@Component({
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() ingredientFormWidth: string;
  @Input() ingredientListWidth: string;
  currentHeight: string = '450px';
  currentWidth: string = '100%';
  listType: string = 'create';
  editableData: Ingredient;
  ingredients: Ingredient[];

  constructor(
    private ingredientService: IngredientService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getIngredients();
   
  }

  getEditableData(value: any): void {
    this.editableData = value;
  }

  /**
   * Fetches all ingredients from localhost
   * @param none
   * @return void
   */
  public getIngredients(): void {
    this.ingredientService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}
