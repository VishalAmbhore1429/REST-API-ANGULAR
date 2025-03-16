import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { BookServiceService } from './Services/book-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library1';
  booksData:any;
  constructor(private bookservice:BookServiceService){
  }

  showBooks(){
    this.bookservice.getBooks().subscribe((data:any)=>{
      this.booksData = data;
      console.log(this.booksData);
    })
  }
}
