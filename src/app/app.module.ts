import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainTextComponent } from './rain-text/rain-text.component';
import { RainText2Component } from './rain-text2/rain-text2.component';
import { FormsModule } from '@angular/forms';
import { PextraComponent } from './pextra/pextra.component';
import { UserpageComponent } from './pextra/userpage/userpage.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RainTextComponent,
    RainText2Component,
    PextraComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   MatIconModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
