import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList = [{ID:1,Img:"../../assets/5.JPG",Name:"Apple iPhone 13",Price:1144,Quantity:3},
                        {ID:2,Img:"../../assets/4.JPG",Name:"Apple iPhone 12",Price:1038,Quantity:5},
                        {ID:3,Img:"../../assets/8.JPG",Name:"Samsung Galaxy S21 Ultra",Price:1198,Quantity:11},
                        {ID:4,Img:"../../assets/9.JPG",Name:"Xiaomi 11T PRO",Price:585,Quantity:15}];

  constructor() { }
  getAllProducts(){
    return this.ProductList;
  }
  grtProductsById(ID:any){
    if(typeof(ID)!='number')
    return null;
    else{
    var x=[];
    x= this.ProductList.filter((e)=>e.ID==ID );
    if(x.length!=0)
    return x;
    else 
    return null;
  }
}}
