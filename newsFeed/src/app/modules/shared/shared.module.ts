import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import { NewsComponent } from './news/news.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';



@NgModule({
  declarations: [
    ImgComponent,
    NewsComponent,
    NewsFeedComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
