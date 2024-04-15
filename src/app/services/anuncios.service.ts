import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  private readonly baseUrl: string = '';

  constructor(private http: HttpClient) { }
}
