import { Routes } from '@angular/router';
import { ShowBookComponent } from './show-book/show-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

export const routes: Routes = [
    {path:'showbooks',component:ShowBookComponent},
    {path:'addbook',component:AddBookComponent},
    {path:'updateBook',component:UpdateBookComponent}
];
