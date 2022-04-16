import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListTableComponent } from './recipe-list-table.component';

describe('RecipeListTableComponent', () => {
  let component: RecipeListTableComponent;
  let fixture: ComponentFixture<RecipeListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
