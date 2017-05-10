import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserComponent} from'./users/user.component';
import { DataService } from './shared/services/data.service';
import { app_routing } from './app.routing';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [UserComponent]
})
export class AppModule { }
