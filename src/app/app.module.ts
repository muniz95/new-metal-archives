import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';

import { BandsService } from './shared/services/bands.service';
import { ArtistsService } from './shared/services/artists.service';
import { ReleasesComponent } from './releases/releases.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouting } from 'app/app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { BandModule } from './band/band.module';
import { LabelModule } from './label/label.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RipModule } from './rip/rip.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { ReportModule } from './report/report.module';
import { TodoModule } from './todo/todo.module';
import { HelpModule } from './help/help.module';
import { RulesModule } from './rules/rules.module';
import { FaqModule } from './faq/faq.module';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ReleasesComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    CollapseModule.forRoot(),
    BandModule,
    AppRouting,
    LabelModule,
    ReviewsModule,
    RipModule,
    UserModule,
    NewsModule,
    ReportModule,
    TodoModule,
    HelpModule,
    RulesModule,
    FaqModule
  ],
  providers: [BandsService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
