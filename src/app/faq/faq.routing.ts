import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqComponent } from './faq.component';

const routes: Routes = [
  { path: 'faq', pathMatch: 'full', component: FaqComponent }
];

export const FaqRouting: ModuleWithProviders = RouterModule.forRoot(routes);
