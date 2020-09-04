import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public verCategorias() {
    return this.http.get('//52.55.19.109:5000/categoria')
  }
}
