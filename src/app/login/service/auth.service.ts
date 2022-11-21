import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl?: string;
  error_message?: string;
  constructor(private http: HttpClient ) { 
    
  }
  public generateToken (formData:any) : Observable<any> {
    return this.http.post("http://localhost:8080/login", formData);
  }
  logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }
  login(name: string, password: string): Observable<any> {
    var formDatas = new FormData();
    formDatas.append('username', name);
    formDatas.append('password', password);
    return this.http.post("http://localhost:8080/login", formDatas);
    
  }
}
