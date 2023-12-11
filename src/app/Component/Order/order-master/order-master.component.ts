import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatID: number = 0;
  orderTotalPrice: number = 0;
  receivedOrderTotalPrice: number = 0

  //clientNameInpElem: ElementRef = {} as ElementRef;
  //clientNameInpElem?: ElementRef; //optional paramter
  //clientNameInpElem: ElementRef | undefined = undefined
  //clientNameInpElem: ElementRef | null = null;
  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef; //Non-null asseration operator
  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent
  constructor() {
    this.catList = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobile' }
    ];
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.  
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your Name Here";
    this.clientNameInpElem.nativeElement.style.border = "2px solid red";
    console.log(this.prdListCompObj.prdList)
  }
  onTotalPriceChanged(totalPrice: number) {
    this.receivedOrderTotalPrice = totalPrice;
  }
}

