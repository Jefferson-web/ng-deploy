import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadesService {
  
  private readonly baseUrl: string = 'https://localhost:44349/api/Nacionalidades';

  constructor(private http: HttpClient) { }

  listarNacionalidades(){
    return this.http.get(this.baseUrl);
  }
}
