import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

const routes: Routes = [
  { path: 'help', pathMatch: 'full', component: HelpComponent }
];

export const HelpRouting: ModuleWithProviders = RouterModule.forRoot(routes);
