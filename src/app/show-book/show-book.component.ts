import { Component } from '@angular/core';
import { BookServiceService } from '../Services/book-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-book',
  imports: [FormsModule,CommonModule],
  templateUrl: './show-book.component.html',
  styleUrl: './show-book.component.css'
})
export class ShowBookComponent {
  booksData:any;
  succesMessage:any;
  showForm : boolean = false;
  getSelectedData:any|undefined;
  bookname:any;
  authorname:any;
  language:any;
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

  selectBook(id:any){
    this.bookservice.getBookData(id).subscribe((data:any)=>{
      console.log(data.bookname);  
      this.getSelectedData = data;
      this.showForm = true;
    })
  }

  updateBook(id:any,data:any){
    this.bookservice.updateBook(id,data).subscribe((result)=>{
      console.log(result);
      this.succesMessage = 'Book Data Updated Successfully';
      this.showAllBooks();
      this.showForm = false;
    })
  }
}
