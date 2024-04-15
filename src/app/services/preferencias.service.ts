import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {

  private readonly baseUrl: string = 'https://localhost:44349/api/Preferencias';

  constructor(private http: HttpClient) { }

  listarPreferencias(){
    return this.http.get(this.baseUrl);
  }
}
