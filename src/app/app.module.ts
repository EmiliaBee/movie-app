import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovielistingComponent } from './components/movielisting/movielisting.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistingComponent,
    MoviedetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
