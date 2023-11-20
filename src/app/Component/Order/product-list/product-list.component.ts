import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  catList: ICategory[];
  prdList: Iproduct[];
  selectedCatID: number = 0;
  orderTtotalPrice: number = 0;
  constructor() {
    this.catList = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobile' }
    ]
    this.prdList = [
      { id: 100, name: 'lenovoThinkpad laptop', price: 100, quantity: 1, imgURL: 'https://picsum.photos/350/200', categoryID: 1 },
      { id: 200, name: 'Apple Macbook laptop', price: 200, quantity: 5, imgURL: 'https://picsum.photos/350/200', categoryID: 1 },
      { id: 300, name: 'lenovo tab 2', price: 300, quantity: 10, imgURL: 'https://picsum.photos/350/200', categoryID: 2 },
      { id: 400, name: 'samsung tab', price: 400, quantity: 0, imgURL: 'https://picsum.photos/350/200', categoryID: 2 },
      { id: 500, name: 'Samsungnote laptop', price: 500, quantity: 3, imgURL: 'https://picsum.photos/350/200', categoryID: 3 },
      { id: 600, name: 'Apple Bookair laptop', price: 600, quantity: 1, imgURL: 'https://picsum.photos/350/200', categoryID: 3 }
    ]
  }

  ngOnInit(): void { }
  prdTrackByFn(index: number, prd: Iproduct): number {
    return prd.id;
  }

  buy(prdPrice: number, count: any) {
    this.orderTtotalPrice = parseInt(count) * prdPrice;
    // let ItemsCount:number = count;
    this.orderTtotalPrice = Number(count) * prdPrice;
    // ItemsCount=count as number;
    this.orderTtotalPrice = +count * prdPrice //angular way to convert from string to number or int to string
  }
  ChangeCat() {
    this.selectedCatID = 1;
  }
}