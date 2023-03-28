import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OrderByPipe],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
