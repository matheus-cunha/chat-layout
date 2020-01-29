import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { Recipient } from '../models/recipient-interface';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipientService {
  url = 'http(s)://5e305536576f9d0014d63ea5.mockapi.io/:recipient';

  constructor(private HttpClient: HttpClientService) {
  }

  listProjects(): Observable<HttpResponse<Recipient[]>> {
    return this.HttpClient.get<Recipient[]>(this.url);
  }
}
