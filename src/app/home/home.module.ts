import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeLatestComponent } from './home-latest/home-latest.component';
import { TabsModule } from 'ngx-bootstrap';
import { HomeLatestReviewsComponent } from './home-latest-reviews/home-latest-reviews.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TabsModule.forRoot()
  ],
  declarations: [HomeComponent, HomeLatestComponent, HomeLatestReviewsComponent]
})
export class HomeModule { }
