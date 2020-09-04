import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { CategoriasService } from '../servicios/categorias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private productosserv: ProductosService, private categoriaserv: CategoriasService) { 
    this.cargardatos()
    this.verCategorias()
  }

  ngOnInit() {
  }
  filtro: string = "";
  cantidad : number = 1;
  datos: any = [];
  datosFiltro: any;
  categorias: any = [];

  private PromesaverProductos(){
    return new Promise((resolve,reject)=>{
      this.productosserv.verProductos().subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  private promesaverCategoria() {
    return new Promise((resolve,reject)=>{
      this.categoriaserv.verCategorias().subscribe((result:any)=>{
        resolve({
          result,resultado:'ok'
        })
      },(error:object)=>{
        reject({
          error,resultado:'error'
        })
      });
    })
  }

  private async verCategorias() {
    let result: any = null
    try {
      result = await this.promesaverCategoria()
      result = result.result
      result = result.resultado
      this.categorias = result
    } catch (error) {
      console.log(error)
    }
  }

  
  title = 'pruebatecnica';

  async cargardatos(){
    let result: any = null;
    let producto: any;
    try {
      result = await this.PromesaverProductos()
      result = result.result
      result = result.res
      result.forEach(element => {
        producto = {
          id: element.id_producto,
          imagen: element.imagen_producto,
          nombre: element.nombre_producto,
          descripcion: element.descripcion_producto,
          precio: element.precio_producto,
          categoria: element.categoria_id,
          cantidad: 1
        }
        this.datos.push(producto)
      });
    } catch (error) {
      console.log(error)
    }
       
  }
  mas(id:number){
    this.datos.forEach(element =>{
      if(element.id == id) {
        element.cantidad += 1
      }
    })
  }

  menos(id:number){

    this.datos.forEach(element =>{
      if(element.id == id) {
        if(element.cantidad <= 1){
          element.cantidad = 1
        }
        else{
          element.cantidad -= 1
        }
      }
    })
    
  }

  categoria() {
    this.datosFiltro = []
    this.datos.forEach(element => {
      if(element.categoria == this.filtro){
        this.datosFiltro.push(element)
      }
    });
  }

  agregarProducto(id: number) {
    let producto: any
    let respuesta: any
    this.datos.forEach(element => {
      if(element.id = id){
        producto = element
      }
    });
    this.productosserv.agregarProducto(producto)
    alert("se ha agregado el producto al carrito")
  }
}
