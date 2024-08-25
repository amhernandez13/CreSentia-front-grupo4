import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTerapeutaServiceService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  registerUser(userData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/terapeutas`, userData);
  }
}
