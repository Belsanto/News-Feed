import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';
import { NewsComponent } from './components/news/news.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ImgComponent,
    NewsComponent,
    NewsFeedComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ImgComponent,
    NewsComponent,
    NewsFeedComponent,
    TimeAgoPipe
  ]
})
export class SharedModule { }
