import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor(private httpClient:HttpClient) { }

// http request view all products
viewAllProducts(){
  return this.httpClient.get("http://localhost:3000/products")
}

addProduct(newProduct: any){
  return this.httpClient.post("http://localhost:3000/products", newProduct)

}

// api to get single product data
viewproduct(id:any){
  return this.httpClient.get("http://localhost:3000/products/"+id)
}

// delete
deleteProduct(id:any){
  return this.httpClient.delete("http://localhost:3000/products/"+id)

}

// edit product
editProduct(id:any,data:any){
  return this.httpClient.put("http://localhost:3000/products/"+id,data)
}


}


