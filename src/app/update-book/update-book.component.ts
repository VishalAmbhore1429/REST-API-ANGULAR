import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookServiceService } from '../Services/book-service.service';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule,RouterLink],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  selectedData:any;
  constructor(private bookservices:BookServiceService){}

  updateBook(id:any){
    this.bookservices.updateBook(id).subscribe((result)=>{
      console.log(result);
      this.selectedData = result;
    })
  }
}
