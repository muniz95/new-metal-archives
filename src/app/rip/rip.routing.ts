import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RipComponent } from './rip.component';

const ripRoutes: Routes = [
  { path: 'rip', pathMatch: 'full', component: RipComponent }
];

export const RipRouting: ModuleWithProviders = RouterModule.forRoot(ripRoutes);
