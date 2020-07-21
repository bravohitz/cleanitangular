import { Component, OnInit } from '@angular/core';
import { CleaningOrder } from '../Models/cleaning-order';
import { CleaningOrderServiceService } from '../Services/cleaning-order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cleaning-order-form',
  templateUrl: './cleaning-order-form.component.html',
  styleUrls: ['./cleaning-order-form.component.css']
})
export class CleaningOrderFormComponent implements OnInit {

  cleaningOrder: CleaningOrder;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private cleaningOrderServiceService: CleaningOrderServiceService) {
    this.cleaningOrder = new CleaningOrder();
  }
 
  onSubmit() {
    this.cleaningOrderServiceService.save(this.cleaningOrder).subscribe(result => this.gotoCleaningOrderList());
  }
 
  gotoCleaningOrderList() {
    this.router.navigate(['/cleaningOrders']);
  }


  ngOnInit() {
  }

}