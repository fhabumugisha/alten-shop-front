import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
   constructor(private httpClient: HttpClient) {
   }


   getProducts(){
 return this.httpClient.get<Product[]>('/api/v1/products');
   }
}
