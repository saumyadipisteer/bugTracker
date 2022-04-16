import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { isLoggedin } from 'src/app/state/user-state/user.selector';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private store: Store
  ) {}
  isLoggedIn$: Observable<boolean>;

  ngOnInit(): void {
    this.defaultUser();
    this.userService.setLoginStatus();
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedin)
    )
    
  }

  /**
   * Adds a default user for the application
   * @param none
   * @returns `void`
   */
  private defaultUser(): void {
    localStorage.setItem('users', JSON.stringify(this.userService.newUser));
    
  }
}
