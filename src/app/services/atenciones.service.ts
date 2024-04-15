import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtencionesService {

  private readonly baseUrl: string = 'https://localhost:44349/api/Atenciones';

  constructor(private http: HttpClient) { }

  listarAtenciones(){
    return this.http.get(this.baseUrl);
  }
}
