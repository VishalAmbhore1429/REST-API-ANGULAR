import { Component } from '@angular/core';
import { BookServiceService } from '../Services/book-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  bookValue : any;

  constructor(private bookser:BookServiceService){
    
  }
  successMessage:any;
  addBook(data:any){
    // this.bookValue = this.addBookForm.value;
    // console.log(this.bookValue);
    console.warn(data)
    this.bookser.saveBook(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.successMessage = "Book Added SuccessFully";
      }
    })
  }
}
