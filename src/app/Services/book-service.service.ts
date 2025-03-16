import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://127.0.0.1:8000/api/showallbooks");
  }

  saveBook(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addbook",data);
  }

  deleteBook(id:any){
    return this.http.delete("http://127.0.0.1:8000/api/deletebook/"+id);
  }

  updateBook(id:any){
    return this.http.get("http://127.0.0.1:8000/api/showonebook/"+id);
  }
}
