import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, retry, map } from 'rxjs';
import { Article } from '../models/article.models';
import { NewsFeed, User_input } from '../models/newsFeed.models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //https://free-news.p.rapidapi.com/v1/search?q=Armenia&lang=es&page_size=20
  private APIURL = `https://free-news.p.rapidapi.com/v1`; //API DE NOTICIAS
  private HEADERS = new HttpHeaders({
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': 'c7c1a90de9mshb9f00b2eb252e9ap11edfcjsnfd404a197528'
  });

  private newsFeed: NewsFeed | null=null;

  constructor(
    private  http: HttpClient
    ) { }

    getAll(q:string, lang:string, page:number|string){

      return this.http
      .get<NewsFeed>(`${this.APIURL}/search?q=${q}&lang=${lang}&page=${page}&page_size=10`, {
        headers: this.HEADERS
      });
    }

    setNewsFeed(newsFeed: NewsFeed){
      this.newsFeed = newsFeed;
    }
}
