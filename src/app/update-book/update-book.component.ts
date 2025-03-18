import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../Services/book-service.service';


@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  selectedData:any;
  constructor(private bookservices:BookServiceService){}

  updateBook(data:any){
    // this.bookservices.updateBook(id).subscribe((result)=>{
      console.log(data);
      // this.selectedData = result;
    // })
  }
}
