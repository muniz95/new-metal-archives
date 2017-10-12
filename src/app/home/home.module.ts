import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeLatestComponent } from './home-latest/home-latest.component';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [HomeComponent, HomeNewsComponent, HomeLatestComponent]
})
export class HomeModule { }
