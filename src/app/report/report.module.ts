import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportRouting } from 'app/report/report.routing';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReportRouting,
    TabsModule.forRoot()
  ],
  declarations: [ReportListComponent]
})
export class ReportModule { }
