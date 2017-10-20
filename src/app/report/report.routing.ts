import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  { path: 'report/list', pathMatch: 'full', component: ReportListComponent }
];

export const ReportRouting: ModuleWithProviders = RouterModule.forRoot(routes);
