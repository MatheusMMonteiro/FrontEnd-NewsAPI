import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsComponent } from './create-news/create-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-news', pathMatch: 'full'},
  {path: 'list-news', component: ListNewsComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: 'update-news/:id', component: UpdateNewsComponent},
  {path: 'delete-news/:id', component: DeleteNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
