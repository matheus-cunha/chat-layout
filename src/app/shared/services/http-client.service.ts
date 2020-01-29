import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private http: HttpClient) {}

  get<T>(url:string):Observable<HttpResponse<T>>{
    return this.http.get<T>(url,{
      observe: 'response',
      responseType: 'json'
    });
  }
}