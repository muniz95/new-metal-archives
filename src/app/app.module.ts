import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { BandsComponent } from './bands/bands.component';
import { ArtistsComponent } from './artists/artists.component';

import { BandsService } from './shared/services/bands.service';
import { ArtistsService } from './shared/services/artists.service';
import { ReleasesComponent } from './releases/releases.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouting } from 'app/app.routing';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BandsComponent,
    ArtistsComponent,
    ReleasesComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    CollapseModule.forRoot(),
    AppRouting
  ],
  providers: [BandsService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
