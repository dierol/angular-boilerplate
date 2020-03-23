import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { HttpClientModule } from '@angular/common/http';
import { LaddaModule } from 'angular2-ladda';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxLocalStorageModule.forRoot(),
    LaddaModule.forRoot({
        style: "contract",
        spinnerSize: 40,
        spinnerColor: "grey",
        spinnerLines: 12
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
