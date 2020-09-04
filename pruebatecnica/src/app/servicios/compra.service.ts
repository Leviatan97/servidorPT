import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  public registrarCompra(datos: any) {
    return this.http.post('//52.55.19.109:5000/compra', datos)
  }
}
