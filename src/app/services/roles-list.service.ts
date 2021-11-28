import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesListService {
  constructor(private http: HttpClient) {}

  getRolesList(userId: string): Observable<any[]> {
    return this.http.get<any[]>('/.netlify/functions/getRoles', {
      headers: {
        userId: userId,
        'Content-Type': 'application/json',
      },
    });
  }
}
