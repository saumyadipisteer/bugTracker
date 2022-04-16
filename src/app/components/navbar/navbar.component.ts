import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { userLogout } from 'src/app/state/user-state/user.action';
import { isLoggedin } from 'src/app/state/user-state/user.selector';

@Component({
  selector: 'recipe-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes = [];

  isLoggedIn$: Observable<boolean>;
  constructor(private userService: UserService, private store: Store) {}

  ngOnInit(): void {
    this.userLoggedIn();
    this.userService.setLoginStatus();
  }

  userLoggedIn() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedin));
  }

  userLoggedOut() {
    this.userService.postUserLoggedOut();
    this.store.dispatch(userLogout({ status: false }));
  }
}
