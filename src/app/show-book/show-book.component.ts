import { Component } from '@angular/core';
import { BookServiceService } from '../Services/book-service.service';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-show-book',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './show-book.component.html',
  styleUrl: './show-book.component.css'
})
export class ShowBookComponent {
  booksData:any;
  succesMessage:any;
  selectedData:any;
  constructor(private bookservice:BookServiceService){
    this.showAllBooks();
  }

  showAllBooks(){
    this.bookservice.getBooks().subscribe((data:any)=>{
      this.booksData = data;
      console.log(this.booksData);
    })
  }

  deleteBook(id:string){
    this.bookservice.deleteBook(id).subscribe((result)=>{
      console.log(result); 
      if(result){
        this.succesMessage = 'Book Deleted Successfully';
        this.showAllBooks();
      }     
    })
  }

  updateBook(id:string){
    return this.bookservice.updateBook(id).subscribe((updateBookData)=>{
      // console.log(updateBookData);
      this.selectedData = updateBookData;
    })
  }
}
