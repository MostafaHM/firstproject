import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  StoreName:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurchased:boolean;



  constructor(private service:ProductServiceService) { 
    this.Discount = DiscountOffers.lowDiscount;
    this.StoreName = "Mostafa Store";
    this.StoreLogo = "../../assets/image.png";
    this.ProductList = [{ID:1,Img:"../../assets/5.JPG",Name:"Apple iPhone 13",Price:1144,Quantity:3},
                        {ID:2,Img:"../../assets/4.JPG",Name:"Apple iPhone 12",Price:1038,Quantity:5},
                        {ID:3,Img:"../../assets/8.JPG",Name:"Samsung Galaxy S21 Ultra",Price:1198,Quantity:11},
                        {ID:4,Img:"../../assets/9.JPG",Name:"Xiaomi 11T PRO",Price:585,Quantity:15}];
    this.CategoryList = [{ID:1,Name:"Mobile"},
                          {ID:2,Name:"Laptop"},
                          {ID:3,Name:"Electronics"}];
    this.ClientName = "Mostafa";
    this.IsPurchased = false;
  }

  Purchase() {
    this.IsPurchased = true;
 }

 renderValues(){
  this.ProductList = this.service.getAllProducts();
  this.IsPurchased = false;
 }

  ngOnInit(): void {
  }

}
