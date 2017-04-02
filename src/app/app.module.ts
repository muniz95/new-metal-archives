import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';

import { BandsService } from './bands.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'bands',
    pathMatch: 'full'
  },
  {
    path: 'bands',
    component: BandsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
