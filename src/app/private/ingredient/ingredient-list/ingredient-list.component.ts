import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/interface/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { EditableData } from 'src/app/interface/user';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { select, Store } from '@ngrx/store';
import { ingredientSelector } from 'src/app/state/ingredient-state/ingredient.selector';
import { addIngredient } from 'src/app/state/ingredient-state/ingredient.action';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class IngredientListComponent implements OnInit {
  private _listType: string;

  ingredients$: Observable<Ingredient[]> = of([]);

  get listType(): string {
    return this._listType;
  }
  @Input() set listType(value: string) {
    if (value) {
      this._listType = value;
    }
  }
  @Input() currentHeight: string;
  @Input() currentWidth: string;

  @Output() editableData: EventEmitter<EditableData> =
    new EventEmitter<EditableData>();

  private _ingredient: Ingredient[];

  get ingredients(): Ingredient[] {
    return this._ingredient;
  }
  @Input() set ingredients(value: Ingredient[]) {
    if (value) {
      this._ingredient = value;
    }
  }

  constructor(
    private ingredientService: IngredientService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private config: DynamicDialogConfig,
    private store: Store,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setIngredients();
    if (this._listType !== 'view') {
    }

    this.getIngredients();
  }

 

  getIngredients() {
    this.ingredients$ = this.store.pipe(select(ingredientSelector));
    
  }

  /**
   * Sets ingredients list if accessed using dynamic dialog
   */
  setIngredients(): void {
    if (this.config.data?.ingredients) {
      this._ingredient = this.config.data?.ingredients;
      this.listType = this.config.data?.listType;
    }
  }

  /**
   * For confirm dialog popup
   * @param index number
   * @returns void
   */
  confirm(index: number): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this ingredient?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Ingredient removed from the recipe.',
        });

        this.deleteIngredientIn(index);
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  /**
   * Deletes selected ingredients from localhost
   * @param index number - for the current ingredient that user wants to remove
   * @returns void
   */
  deleteIngredientIn(index: number): void {
    this.ingredientService.deleteIngredient(index);
  }

  editable(data: Ingredient, index: number) {
    this.editableData.emit({ index: index, data: data });
  }

  addIngredientForm() {
    const ref = this.dialogService.open(IngredientFormComponent, {
      header: 'Add Ingredient',
      width: '500px',
      data: { ingredients: {}, listType: 'Add' },
    });
  }

  changePage(route: string){
    this.router.navigate([`/createRecipe/${route}`]);
  }
}
