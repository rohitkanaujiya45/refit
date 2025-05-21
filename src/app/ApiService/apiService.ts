import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/submit/';  // Your API endpoint

  constructor(private http: HttpClient) { }

  submitForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
