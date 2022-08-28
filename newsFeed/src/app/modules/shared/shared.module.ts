import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from './components/img/img.component';
import { NewsComponent } from './components/news/news.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { ShortAuthorPipe } from './pipes/short-author.pipe';



@NgModule({
  declarations: [
    ImgComponent,
    NewsComponent,
    NewsFeedComponent,
    TimeAgoPipe,
    ShortDescriptionPipe,
    ShortAuthorPipe
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
    TimeAgoPipe,
    ShortDescriptionPipe,
    ShortAuthorPipe
  ]
})
export class SharedModule { }
