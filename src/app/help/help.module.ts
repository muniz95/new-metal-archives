import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { HelpRouting } from 'app/help/help.routing';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    HelpRouting
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
