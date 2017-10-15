import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewRouting } from 'app/reviews/reviews.routing';
import { TabsModule } from 'ngx-bootstrap';
import { ReviewsComponent } from 'app/reviews/reviews.component';
import { ReviewsByDateComponent } from './reviews-by-date/reviews-by-date.component';
import { ReviewsByRatingComponent } from './reviews-by-rating/reviews-by-rating.component';
import { ReviewsByAlphaComponent } from './reviews-by-alpha/reviews-by-alpha.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    ReviewRouting
  ],
  declarations: [
    ReviewsComponent,
    ReviewsByDateComponent,
    ReviewsByRatingComponent,
    ReviewsByAlphaComponent
  ]
})
export class ReviewsModule { }
