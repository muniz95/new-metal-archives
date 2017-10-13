import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component'
import { BandsCountryComponent } from 'app/band/bands-country/bands-country.component';
import { BandsGenreComponent } from 'app/band/bands-genre/bands-genre.component';

const bandRoutes: Routes = [
  { path: 'bands/alphabetical', pathMatch: 'full', component: BandsAlphabeticalComponent },
  { path: 'bands/country', pathMatch: 'full', component: BandsCountryComponent },
  { path: 'bands/genre', pathMatch: 'full', component: BandsGenreComponent }
];

export const BandRouting: ModuleWithProviders = RouterModule.forRoot(bandRoutes);
