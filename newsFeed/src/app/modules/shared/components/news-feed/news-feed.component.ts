import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.models';
import { NewsFeed } from 'src/app/models/newsFeed.models';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  @Input() newsFeed: NewsFeed | null = null;

  @Input() page= 1;

  @Input()
  set articleIndex(index: number | null ){
    if (index) {
      this.onShowDetail(index);
    }
  }
  @Output() loadNext = new EventEmitter();
  @Output() loadPrevious = new EventEmitter();

  articleChosen: Article | null = null;

  constructor(
  ) { }


  ngOnInit(): void {
    if(this.newsFeed)
    this.articleChosen=this.newsFeed.articles[0];
  }

  onShowDetail(index:number){
    if(this.newsFeed!=null){
      this.articleChosen = this.newsFeed.articles[index];
      console.log(this.articleChosen);
    }

  }

  onLoadNext() {
    this.loadNext.emit();
  }
  onLoadPrevious() {
    this.loadPrevious.emit();
  }
}
