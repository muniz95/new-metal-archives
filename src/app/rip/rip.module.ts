import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RipComponent } from './rip.component';
import { RipRouting } from 'app/rip/rip.routing';

@NgModule({
  imports: [
    CommonModule,
    RipRouting
  ],
  declarations: [RipComponent]
})
export class RipModule { }
