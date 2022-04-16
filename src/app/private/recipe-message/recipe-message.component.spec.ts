import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMessageComponent } from './recipe-message.component';

describe('RecipeMessageComponent', () => {
  let component: RecipeMessageComponent;
  let fixture: ComponentFixture<RecipeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
