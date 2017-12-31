import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component'
import { BandsCountryComponent } from 'app/band/bands-country/bands-country.component';
import { BandsGenreComponent } from 'app/band/bands-genre/bands-genre.component';
import { BandInfoComponent } from 'app/band/band-info/band-info.component';

const bandRoutes: Routes = [
  { path: 'bands/alphabetical', pathMatch: 'full', component: BandsAlphabeticalComponent },
  { path: 'bands/country', pathMatch: 'full', component: BandsCountryComponent },
  { path: 'bands/genre', pathMatch: 'full', component: BandsGenreComponent },
  { path: 'bands/:id', pathMatch: 'full', component: BandInfoComponent }
];

export const BandRouting: ModuleWithProviders = RouterModule.forRoot(bandRoutes);
