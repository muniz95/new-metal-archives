import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRouting } from 'app/faq/faq.routing';

@NgModule({
  imports: [
    CommonModule,
    FaqRouting
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
