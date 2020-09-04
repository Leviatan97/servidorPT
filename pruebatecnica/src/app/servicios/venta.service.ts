import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  public registrarVenta(datos: any) {
    return this.http.post('//52.55.19.109:5000/venta',datos);
  }
}
