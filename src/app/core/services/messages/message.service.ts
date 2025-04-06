import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment'; 
import { PaginatedResponse } from '../../models/paginatedResponse.model';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = `${environment.apiUrl}/messages`;

  constructor(private http: HttpClient) {}

  getMessages(page: number, size: number): Observable<PaginatedResponse<Message>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', 'receivedAt,desc');
    console.log(this.baseUrl);

    return this.http.get<PaginatedResponse<Message>>(this.baseUrl, { params });
  }
  
}
