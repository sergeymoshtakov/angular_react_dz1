import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users : string[] = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'Judy',
  ];

  products : any[] = [
    {
      title : 'Samsung',
      price : 7000,
      resolution : 1200,
    },
    {
      title : 'Iphone X',
      price : 10000,
      resolution : 1400,
    },
    {
      title : 'One Plus',
      price : 8000,
      resolution : 1300,
    },
    {
      title : 'Redmi',
      price : 5000,
      resolution : 1100,
    },
    {
      title : 'Vivo',
      price : 6000,
      resolution : 1150,
    },
    {
      title: 'iPhone15',
      price: 17000,
      resolution: 1700
    },
  ];

  show(ind : number){
    alert(ind);
  }
}
