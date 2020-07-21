import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CleaningOrdersListComponent } from './cleaning-orders-list/cleaning-orders-list.component';
import { CleaningOrderFormComponent } from './cleaning-order-form/cleaning-order-form.component';
import { CleaningOrderEditFormComponent } from './cleaning-order-edit-form/cleaning-order-edit-form.component';


const routes: Routes = [
  { path: 'cleaningOrders', component: CleaningOrdersListComponent },
  { path: 'editCleaningOrder/:cleaningOrderId', component: CleaningOrderEditFormComponent },
  { path: 'addCleaningOrder', component: CleaningOrderFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
