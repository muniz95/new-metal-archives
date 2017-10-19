import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'users/list', pathMatch: 'full', component: UsersListComponent }
];

export const UserRouting: ModuleWithProviders = RouterModule.forRoot(routes);
