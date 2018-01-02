import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component';
import { BandsCountryComponent } from './bands-country/bands-country.component';
import { BandsGenreComponent } from './bands-genre/bands-genre.component';
import { BandRouting } from 'app/band/band.routing';
import { BandInfoComponent } from './band-info/band-info.component';
import { TabsModule } from 'ngx-bootstrap/tabs/tabs.module';
import { BandDiscographyComponent } from './band-info/band-discography/band-discography.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BandRouting
  ],
  declarations: [
    BandsAlphabeticalComponent,
    BandsCountryComponent,
    BandsGenreComponent,
    BandInfoComponent,
    BandDiscographyComponent
  ]
})
export class BandModule { }
