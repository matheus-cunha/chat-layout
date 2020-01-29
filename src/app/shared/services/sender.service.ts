import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { sender } from '../models/sender-interface';
import { HttpResponse } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class SenderService {
  url = 'http(s)://5e305536576f9d0014d63ea5.mockapi.io/:sender';

  constructor(private HttpClient: HttpClientService) {
  }

  listProjects(): Observable<HttpResponse<sender[]>> {
    return this.HttpClient.get<sender[]>(this.url);
  }
}
