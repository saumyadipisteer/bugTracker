import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserCredentials } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSubject$: BehaviorSubject<UserCredentials> =
    new BehaviorSubject<UserCredentials>({
      password: '',
      username: '',
    });

  private userLoginStatus$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  checkLogin$: Observable<boolean> = this.userLoginStatus$.asObservable();

  checkUser$ = this.userSubject$.asObservable();
  newUser: UserCredentials[] = [
    { username: 'oneKilogram', password: '1Kilogr@m' },
  ];

  constructor() {}

  /**
   *
   * @param data `UserCrentials`
   * @returns `any`
   */
  postUserInformation(data: UserCredentials): any {
    this.newUser.push(this.createUser(data));

    localStorage.setItem('users', JSON.stringify(this.newUser));
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.userSubject$.next(data);

    return { status: 200, message: 'User successfully created!' };
  }

  /**
   * Fetches user details
   * @param login `UserCredentials`
   * @returns
   */
  getUser(login: UserCredentials) {
    if (this.validateCredentials(this.fetchAllUserDetails(), login)) {
      sessionStorage.setItem('currentUser', JSON.stringify(login));
      this.userSubject$.next(login);
    }

    return this.validateCredentials(this.fetchAllUserDetails(), login)
      ? { status: 200, message: `${login.username} has logged in!` }
      : { status: 401, message: 'Invalid credentials!' };
  }

  /**
   * Checks if the credentials are valid
   * @param users `UserCredentials[]`
   * @param login `UserCredentials
   * @returns `boolean`
   */
  private validateCredentials(
    users: UserCredentials[],
    login: UserCredentials
  ): boolean {
    let validation: boolean = false;
    for (let currIdx = 0; currIdx < users.length; currIdx++) {
      if (
        users[currIdx].username === login.username &&
        users[currIdx].password === login.password
      ) {
        validation = true;
        break;
      }
      validation = false;
    }

    return validation;
  }

  /**
   * Fetches all user credentials from localstorage
   * @returns `UserCredentials`
   */
  private fetchAllUserDetails(): UserCredentials[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  /**
   * Updates session storage and the user subject for user logged out
   * @param none
   * @returns `boolean`
   */
  postUserLoggedOut(): boolean {
    sessionStorage.removeItem('currentUser');
    this.userSubject$.next({ username: '', password: '' });

    return true;
  }
  

  /**
   * Sets login status
   */
  setLoginStatus() {
    this.userSubject$.next(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  /**
   * Checks if user exist in the localstorage
   * @param data `UserCredentials
   * @returns boolean
   */
  private checkExistingUser(data: UserCredentials): boolean {
    //-TODO bind this function on leaving the username field or when the user types
    const userList = JSON.parse(localStorage.getItem('users') || '[]');
    for (let curr = 0; curr < userList.length; curr++) {
      if (userList[curr].username === data.username) {
        return true;
      }
    }
    return false;
  }

  /**
   * Checks if any user is logged in
   * @param none
   * @returns `void`
   */
  private checkLoginStatus(): void {
    this.checkUser$.subscribe((status) => {
      this.userLoginStatus$.next(
        (status.username === '' || status.username !== undefined)
      );
    });
    
  }

  /**
   * Gets the status if the user has logged in
   * @returns `Observable<boolean>`
   */
  getLoginStatus(): Observable<boolean>{
    this.checkLoginStatus();
    return this.checkLogin$
  }

  /**
   * Creates user data
   * @param userData
   * @returns UserCredentials
   */
  private createUser(userData: any): UserCredentials {
    return {
      username: userData.username,
      password: userData.password,
      timestamp: `${this.generateDate()} ${this.generateTime()}`,
    };
  }

  /**
   * Generates date
   * @returns `string`
   */
  generateDate(): string {
    const day = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const date = `${day[new Date().getDay()]} ${this.pad(
      new Date().getMonth()+1
    )} ${new Date().getFullYear()}`;

    return date;
  }

  /**
   * Generates time
   * @returns `string`
   */
  generateTime(): string {
    return new Date().toLocaleTimeString('en-IN', { timeZoneName: 'short' });
  }

  private pad(number: number): string | number {
    return number < 10 ? '0' + number : number;
  }
}
