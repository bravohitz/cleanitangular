import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CleaningOrder } from '../Models/cleaning-order';
import { CleaningOrderServiceService } from '../Services/cleaning-order.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cleaning-order-edit-form',
  templateUrl: './cleaning-order-edit-form.component.html',
  styleUrls: ['./cleaning-order-edit-form.component.css']
})
export class CleaningOrderEditFormComponent implements OnInit {

  cleaningOrder: CleaningOrder;
  sub: Subscription;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private cleaningOrderServiceService: CleaningOrderServiceService) {
        
         this.cleaningOrder = new CleaningOrder;

  }
 
  onSubmit() {
    this.cleaningOrderServiceService.save(this.cleaningOrder).subscribe(result => this.gotoCleaningOrderList());
  }
 
  gotoCleaningOrderList() {
    this.router.navigate(['/cleaningOrders']);
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
     this.cleaningOrderServiceService.getCleaningOrder(params['cleaningOrderId']).subscribe((response: CleaningOrder)=>{
       this.cleaningOrder = response;
     });
  }) 
}
}
