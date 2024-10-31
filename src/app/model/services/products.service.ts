import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Iproducts[] = [
  { id:1, name: 'Assim que acaba', price: 80.0, description: 'assim que acaba', image: '../assimqueacaba.png'},
  { id:2, name: 'Assim que começa', price: 80.0, description: 'assim que começa', image: '../assimquecomeca.png'},
  { id:3, name: 'Brisingr', price: 80.0, description: 'Brisingr', image: '../brisingr.png'},
  { id:4, name: 'Chama de ferro', price: 80.0, description: 'Chamadeferro', image: '../chamadeferro.png'},
  { id:5, name: 'Eldest', price: 80.0, description: 'Eldest', image: '../eldest.png'},
  { id:6, name: 'Eragon', price: 80.0, description: 'Eragon', image: '../eragon.png'},
  { id:7, name: 'Inheritance', price: 80.0, description: 'Inheritance', image: '../inheritance.png'},
  { id:8, name: 'Pequeno principe', price: 80.0, description: 'Pequeno principe', image: '../pequenoprincipe.png'},
  { id:9, name: 'quarta asa', price: 80.0, description: 'Quarta asa', image: '../quartaasa.png'},
  { id:10, name: 'Tempestade de onix', price: 80.0, description: 'Tempestade de onix', image: '../tempestadedeonix.png'}
];
getProducts(): Iproducts[]{
  return this.products;
}
}
