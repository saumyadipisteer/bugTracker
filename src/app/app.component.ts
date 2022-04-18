import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Report } from './interface/report';
import { RecipeService } from './services/description.service';
import { addReport } from './state/report-state/report.action';
import { userLogin } from './state/user-state/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'POC';

  constructor(private recipeService: RecipeService, private store: Store) {}

  ngOnInit() {
    this.recipeService.initializeRecipes();
    const userProfile = sessionStorage.getItem('currentUser');
    if (userProfile) {
      this.store.dispatch(
        userLogin(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
      );
    }

    
  }
 
}
