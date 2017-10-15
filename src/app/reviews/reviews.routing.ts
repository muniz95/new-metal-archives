import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsComponent } from 'app/reviews/reviews.component';

const reviewRoutes: Routes = [
  { path: 'reviews', pathMatch: 'full', component: ReviewsComponent }
];

export const ReviewRouting: ModuleWithProviders = RouterModule.forRoot(reviewRoutes);
