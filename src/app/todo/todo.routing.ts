import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: 'todo', pathMatch: 'full', component: TodoComponent }
];

export const TodoRouting: ModuleWithProviders = RouterModule.forRoot(routes);
