import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CleaningOrdersListComponent } from './cleaning-orders-list/cleaning-orders-list.component';
import { CleaningOrderServiceService } from './Services/cleaning-order.service';
import { CleaningOrderFormComponent } from './cleaning-order-form/cleaning-order-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CleaningOrderEditFormComponent } from './cleaning-order-edit-form/cleaning-order-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CleaningOrdersListComponent,
    CleaningOrderFormComponent,
    CleaningOrderEditFormComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CleaningOrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
