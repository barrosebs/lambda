import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//class publica
export class AppModule implements OnInit{ 
  /**
   *
   */
  constructor(public httpclient: HttpClient) {
      
  }
  ngOnInit(){
    this.httpclient.get
  }
}
