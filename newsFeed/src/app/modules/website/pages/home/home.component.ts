import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.models';
import { NewsFeed } from 'src/app/models/newsFeed.models';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: NewsFeed | null = null;

  page: number = 1;

  constructor(
    private  newsService: NewsService
  ) { }

  ngOnInit(): void {

    this.newsService.getAll('colombia','es',this.page).subscribe(data=>{
      this.newsList = data;
      for (let i = 0; i < this.newsList.articles.length; i++) {
        this.newsList.articles[i].index=i;
      }
    });


  }

  onLoadNext() {
    if(this.newsList!=null){

      this.page= this.page+1;
      this.newsService.getAll('colombia','es',this.page).subscribe(data=>{
        this.newsList = data;
        for (let i = 0; i < this.newsList.articles.length; i++) {
          this.newsList.articles[i].index=i;
        }
      });

    }
  }

  onLoadPrevious() {
    if(this.newsList!=null){

      this.page= this.page-1;
      this.newsService.getAll('colombia','es',this.page).subscribe(data=>{
        this.newsList = data;
        for (let i = 0; i < this.newsList.articles.length; i++) {
          this.newsList.articles[i].index=i;
        }
      });

    }
  }

}
