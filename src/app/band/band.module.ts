import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component';
import { BandsCountryComponent } from './bands-country/bands-country.component';
import { BandsGenreComponent } from './bands-genre/bands-genre.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandsAlphabeticalComponent, BandsCountryComponent, BandsGenreComponent]
})
export class BandModule { }
