import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/models/article.models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  @Input() article: Article = {
    title: '',
    author: '',
    published_date: '',
    published_date_precision: '',
    link: '',
    clean_url: '',
    summary: '',
    rights: '',
    rank: 0,
    topic: '',
    country: '',
    language: '',
    authors: '',
    media: '',
    is_opinion: '',
    twitter_account: '',
    _score: 0,
    _id: ''
  };

  @Output() showArticle = new EventEmitter<number>();

  constructor() { }

  onShowDetail(){
    this.showArticle.emit(this.article.index)
  }
}
