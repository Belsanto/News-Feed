import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //https://free-news.p.rapidapi.com/v1/search?q=Armenia&lang=es&page_size=20
  private APIURL = 'https://free-news.p.rapidapi.com/v1/search?q=colombia&lang=es'; //API DE NOTICIAS
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': 'c7c1a90de9mshb9f00b2eb252e9ap11edfcjsnfd404a197528'
  });

  constructor(
    private  http: HttpClient
    ) { }

    getAll(){
      return this.http
      .get<any>(this.APIURL, {
        headers: this.headers
      })
      .subscribe(data => {
        console.log(data);
      });
    }
}
