import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { ArtistsComponent } from './artists/artists.component';

import { BandsService } from './bands.service';
import { ArtistsService } from './artists.service';
import { ReleasesComponent } from './releases/releases.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'bands',
    pathMatch: 'full'
  },
  {
    path: 'bands',
    component: BandsComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    ArtistsComponent,
    ReleasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BandsService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
