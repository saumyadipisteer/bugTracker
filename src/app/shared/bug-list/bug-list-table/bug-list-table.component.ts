import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interface/user';
import { RecipeService } from 'src/app/services/recipe.service';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { IngredientListComponent } from '../../ingredient/ingredient-list/ingredient-list.component';
import { IngredientService } from 'src/app/services/ingredient.service';
import { Ingredient } from 'src/app/interface/ingredient';

@Component({
  selector: 'bug-list-table',
  templateUrl: './bug-list-table.component.html',
  styleUrls: ['./bug-list-table.component.scss'],
  providers: [DialogService, DynamicDialogConfig ],
})
export class BugListTableComponent implements OnInit {
  recipes: Recipe[];
  ref: DynamicDialogRef;
  constructor(
    private recipeService: RecipeService,
    private dialogService: DialogService,
    private ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipe$.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  // viewIngredients(ingredients: Ingredient[]) {
  //   this.ref = this.dialogService.open(IngredientListComponent, {
  //     header: "Add Ingredient",
  //     width: '70%',
  //     data: { ingredients: ingredients, listType: 'view' },
  //   });
  // }
}
