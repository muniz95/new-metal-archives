import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsAlphabeticalComponent } from './labels-alphabetical/labels-alphabetical.component';
import { LabelRouting } from 'app/label/label.routing';

@NgModule({
  imports: [
    CommonModule,
    LabelRouting
  ],
  declarations: [LabelsAlphabeticalComponent]
})
export class LabelModule { }
