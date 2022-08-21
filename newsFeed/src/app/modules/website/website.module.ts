import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
