import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelsAlphabeticalComponent } from 'app/label/labels-alphabetical/labels-alphabetical.component'
import { LabelsCountryComponent } from 'app/label/labels-country/labels-country.component';

const labelRoutes: Routes = [
  { path: 'labels/alphabetical', pathMatch: 'full', component: LabelsAlphabeticalComponent },
  { path: 'labels/country', pathMatch: 'full', component: LabelsCountryComponent }
];

export const LabelRouting: ModuleWithProviders = RouterModule.forRoot(labelRoutes);
