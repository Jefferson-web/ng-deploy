import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private readonly baseUrl: string = 'https://localhost:44349/api/Servicios';

  constructor(private http: HttpClient) { }

  listarServicios() {
    return this.http.get(this.baseUrl);
  }

}
