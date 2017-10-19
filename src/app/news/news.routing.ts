import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: 'news', pathMatch: 'full', component: NewsComponent }
];

export const NewsRouting: ModuleWithProviders = RouterModule.forRoot(routes);
