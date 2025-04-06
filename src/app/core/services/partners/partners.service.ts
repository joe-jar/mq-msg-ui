import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partner } from '../../models/partner.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private baseUrl = `${environment.apiUrl}/partners`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.baseUrl);
  }

  create(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.baseUrl, partner);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
