import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly PRODUCT_API_URL = 'http://localhost:8089/radhwen/api/product/addproduct';
  constructor(private httpClient: HttpClient) { }
  addProduct(product: Product): Observable<any> {
    // return this.httpClient.post<Product>(this.PRODUCT_API_URL, product);
    return this.httpClient.post(this.PRODUCT_API_URL, product);
  }
}
