import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import {
  DynamicDialogConfig,
  DynamicDialogModule,
} from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserComponent } from './pages/user/user.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter-state/counter.reducer';
import { userReducer } from './state/user-state/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/user-state/user.effect';
import { reportReducer } from './state/report-state/report.reduce';
import { ReportsEffect } from './state/report-state/report.effects';
import { detailsReducer } from './state/recipe-details-state/recipe-details.reducer';
import { SharedModule } from './shared/shared.module';

const primengModules = [
  DynamicDialogModule,
  InputTextModule,
  ButtonModule,
  CheckboxModule,
  KeyFilterModule,
  RadioButtonModule,
  InputNumberModule,
  ToastModule,
  StepsModule,
  DropdownModule,
  TableModule,
  ConfirmDialogModule,
  CardModule,
  ConfirmPopupModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    UserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forRoot({
      count: counterReducer,
      login: userReducer,
      description: reportReducer,
      details: detailsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthEffects, ReportsEffect]),
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...primengModules,
  ],
  providers: [DynamicDialogConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
