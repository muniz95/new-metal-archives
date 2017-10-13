import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsAlphabeticalComponent } from './labels-alphabetical/labels-alphabetical.component';
import { LabelRouting } from 'app/label/label.routing';
import { LabelsCountryComponent } from './labels-country/labels-country.component';

@NgModule({
  imports: [
    CommonModule,
    LabelRouting
  ],
  declarations: [LabelsAlphabeticalComponent, LabelsCountryComponent]
})
export class LabelModule { }
