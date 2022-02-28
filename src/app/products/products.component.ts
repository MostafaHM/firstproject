import { Component, OnInit } from '@angular/core';
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

  constructor() { 
    this.Discount = DiscountOffers.lowDiscount;
    this.StoreName = "Mega Store";
    this.StoreLogo = "../../assets/images.png";
    this.ProductList = [];
    this.CategoryList = [];
    this.ClientName = "Mohamed";
    this.IsPurchased = false;
  }

  ngOnInit(): void {
  }

}
