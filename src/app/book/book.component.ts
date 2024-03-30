import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books : any[] = [
    {
      title : 'JS 1',
      year : 2015,
      img : 'assets/images/js.jpg',
      description : 'gghvvvhkvvkhvv',
      author : 'John Doe 1',
      price : 100
    },
    {
      title : 'JS 2',
      year : 2015,
      img : 'assets/images/js.jpg',
      description : 'gghvvvhkvvkhvv',
      author : 'John Doe 2',
      price : 200
    },
    {
      title : 'JS 3',
      year : 2015,
      img : 'assets/images/js.jpg',
      description : 'gghvvvhkvvkhvv',
      author : 'John Doe 3',
      price : 300
    },
    {
      title : 'JS 4',
      year : 2015,
      img : 'assets/images/js.jpg',
      description : 'gghvvvhkvvkhvv',
      author : 'John Doe 4',
      price : 400
    },
  ];
  selectedBook = this.books[0];
  clickHandler(item : any){
    this.selectedBook = item;
  }
}
