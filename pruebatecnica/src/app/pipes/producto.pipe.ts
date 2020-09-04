import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'producto'
})
export class ProductoPipe implements PipeTransform {

  transform(img: string, prodId: string): any {
    return `http://52.55.19.109:5000/producto/${prodId}/${img}`;
  }

}
