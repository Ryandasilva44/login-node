import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private nodeUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  loginWithNode(name: string, email: string): Observable<any> {
    return this.http.post<any>(this.nodeUrl, { name, email });
  }
}
