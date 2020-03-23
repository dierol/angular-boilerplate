import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mock } from './mock';

@Injectable({
  providedIn: 'root'
})
export class MocksService {

  constructor(private http: HttpClient) { }

  getMocks() {
      return this.http.get<Mock[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
