import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactHeaderComponent,
    ContactFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
