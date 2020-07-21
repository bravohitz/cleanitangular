import { Component, OnInit } from '@angular/core';
import { CleaningOrder } from '../Models/cleaning-order';
import { CleaningOrderServiceService } from '../Services/cleaning-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cleaning-orders-list',
  templateUrl: './cleaning-orders-list.component.html',
  styleUrls: ['./cleaning-orders-list.component.css']
})

export class CleaningOrdersListComponent implements OnInit {
  cleaningOrders: CleaningOrder[];
  sales:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cleaningOrderServiceService: CleaningOrderServiceService) {
      this.sales =0;
  }

  deleteCleaningOrder(cleaningOrderId: number) {
    this.cleaningOrderServiceService.deleteCleaningOrder(cleaningOrderId).subscribe(result => this.gotoCleaningOrderList());
    location.reload();
  }
  editCleaningOrder(cleaningOrderId: number) {
    this.cleaningOrderServiceService.getCleaningOrder(cleaningOrderId).subscribe(result => this.gotoCleaningOrderEditForm(cleaningOrderId));
  }

  gotoCleaningOrderEditForm(cleaningOrderId) {
    this.router.navigate(['/editCleaningOrder/'+cleaningOrderId]);
  }
  gotoCleaningOrderList() {
    this.router.navigate(['/cleaningOrders']);
  }


  ngOnInit() {
    this.cleaningOrderServiceService.findAll().subscribe(data => {
      this.cleaningOrders = data;
      for (let cleaningOrder of this.cleaningOrders) {
        this.sales = this.sales+cleaningOrder.price;
      }
    });

    
  }

} 
