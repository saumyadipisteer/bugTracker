import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-message',
  templateUrl: './recipe-message.component.html',
  styleUrls: ['./recipe-message.component.scss']
})
export class RecipeMessageComponent implements OnInit {
  recipeName: string = 'Kebab'
  author: string = "oneKilogram"
  ingredients: string[] = ['Meat', 'Salt', 'Black pepper']
  constructor() { }

  ngOnInit(): void {
  }

}
