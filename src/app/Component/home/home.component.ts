import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  storeInfo: StoreData
  isImageShown:boolean=true;
  constructor(){
    this.storeInfo = new StoreData('iti store','https://picsum.photos/350/200',['cairo','bonn','köln']);
  }
}
