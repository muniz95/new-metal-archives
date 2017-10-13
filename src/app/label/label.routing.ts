import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelsAlphabeticalComponent } from 'app/label/labels-alphabetical/labels-alphabetical.component'

const labelRoutes: Routes = [
  { path: 'labels/alphabetical', pathMatch: 'full', component: LabelsAlphabeticalComponent }
];

export const LabelRouting: ModuleWithProviders = RouterModule.forRoot(labelRoutes);
