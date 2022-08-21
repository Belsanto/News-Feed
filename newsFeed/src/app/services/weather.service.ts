import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private APIURL = 'https://open-weather13.p.rapidapi.com/city/cali'; //API DEL TIEMPO
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
    'x-rapidapi-key': 'c7c1a90de9mshb9f00b2eb252e9ap11edfcjsnfd404a197528'
  });

  constructor(
    private  http: HttpClient
    ) { }

}
