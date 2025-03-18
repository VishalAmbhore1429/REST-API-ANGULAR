import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { BookServiceService } from './Services/book-service.service';
import { FormsModule } from '@angular/forms';
import { ShowBookComponent } from './show-book/show-book.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library1';
  booksData:any;
  selectedData:any;
  constructor(private bookservice:BookServiceService){
  }

  showBooks(){
    this.bookservice.getBooks().subscribe((data:any)=>{
      this.booksData = data;
      console.log(this.booksData);
    })
  }

  updateBook(id:string){
    return this.bookservice.getBookData(id).subscribe((updateBookData)=>{
      console.log(updateBookData);
      this.selectedData = updateBookData;
    })
  }

}

