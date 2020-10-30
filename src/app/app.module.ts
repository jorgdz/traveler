import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { MyRoutes } from './routes.component';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CountryElemComponent } from './components/country/country-elem/country-elem.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryElemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
