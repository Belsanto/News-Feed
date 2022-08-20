import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
