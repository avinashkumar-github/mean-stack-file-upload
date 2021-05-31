import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Image } from './image.model';
import { Form } from '@angular/forms';
const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(data: FormData): Observable<any> {
    return this.http.post(baseUrl + '/dbupload', data);
  }

  getFiles(): Observable<Image> {
    return this.http.get(baseUrl + '/dbupload');
  }
}
