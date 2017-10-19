import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { SharedModule } from 'app/shared/shared.module';
import { NewsRouting } from 'app/news/news.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsRouting
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }
