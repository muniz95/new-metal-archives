import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedNewsComponent } from './components/news/news.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedNewsComponent],
  exports: [SharedNewsComponent]
})
export class SharedModule { }
