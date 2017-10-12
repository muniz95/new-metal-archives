import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component'
import { BandsCountryComponent } from 'app/band/bands-country/bands-country.component';

const bandRoutes: Routes = [
  { path: 'bands/alphabetical', pathMatch: 'full', component: BandsAlphabeticalComponent },
  { path: 'bands/country', pathMatch: 'full', component: BandsCountryComponent }
];

export const BandRouting: ModuleWithProviders = RouterModule.forRoot(bandRoutes);
