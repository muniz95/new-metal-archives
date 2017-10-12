import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandsAlphabeticalComponent } from './bands-alphabetical/bands-alphabetical.component'

const bandRoutes: Routes = [
  { path: 'bands/alphabetical', pathMatch: 'full', component: BandsAlphabeticalComponent }
];

export const BandRouting: ModuleWithProviders = RouterModule.forRoot(bandRoutes);
