import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddressTableComponent } from './address-table/address-table.component';
import { AddressAutocompleteComponent } from './address-autocomplete/address-autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomModalComponent,
    AddressTableComponent,
    AddressAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
