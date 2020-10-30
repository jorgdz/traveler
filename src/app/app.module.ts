import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { MyRoutes } from './routes.component';

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
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
