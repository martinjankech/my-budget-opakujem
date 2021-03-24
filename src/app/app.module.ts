import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { Error404Component } from './error404/error404.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import { BudgetComponent } from './budget/budget.component';
import { NewItemComponent } from './budget/new-item/new-item.component';
import { ItemDetailComponent } from './budget/item-detail/item-detail.component';
import { EditItemComponent } from './budget/edit-item/edit-item.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { BudgetItemFormComponent } from './budget/budget-item-form/budget-item-form.component';
import {NgbModalModule, } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localeSk)
@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    TodoComponent,
    Error404Component,
    BudgetComponent,
    NewItemComponent,
    ItemDetailComponent,
    EditItemComponent,
    BudgetItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModalModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'sk'},
    {provide:DEFAULT_CURRENCY_CODE,useValue:'EUR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
