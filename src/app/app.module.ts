import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { FormsModule } from '@angular/forms';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListNewsComponent,
    CreateNewsComponent,
    UpdateNewsComponent,
    DeleteNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
