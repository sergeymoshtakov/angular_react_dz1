import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrl: './iphone.component.css'
})
export class IphoneComponent {
  images : any[] = [
    {
      title : 'all',
      img : 'assets/images/all.jpg'
    },
    {
      title : 'black',
      img : 'assets/images/black.jpg'
    },
    {
      title : 'blue',
      img : 'assets/images/blue.jpg'
    },
    {
      title : 'green',
      img : 'assets/images/green.jpg'
    },
    {
      title : 'pink',
      img : 'assets/images/pink.jpg'
    },
    {
      title : 'yellow',
      img : 'assets/images/yellow.jpg'
    },
  ];
  selctedImage = this.images[0];
  clickHandler(item : any){
    this.selctedImage = item;
  }
}
