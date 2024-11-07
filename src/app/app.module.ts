import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [FirstComponent,SecondComponent,AppComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
