import { Component, Input, OnChanges } from '@angular/core';
import { Bid } from './../model';

@Component({
  selector: 'users-bids',
  templateUrl: '/src/components/auction-market/users-bids/users-bids.component.html'
})
export class UsersBidsComponent implements OnChanges {
  @Input() bid: Bid;
  bids: Bid[];
  stuff: boolean;

  constructor() {
    this.bids = [];
    this.stuff = false;
  }

  ngOnChanges(){
    if (this.bid){
      this.bids.push(this.bid);
    }
  }
}