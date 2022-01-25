import { Reservation } from './../models/reservation';
import { SkiPassPrice } from './../models/skiPass';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skipass',
  templateUrl: './skipass.component.html',
  styleUrls: ['./skipass.component.scss']
})
export class SkipassComponent implements OnInit {
  @Input() skiPassPrice:SkiPassPrice[]=[]
  @Output() newReservation = new EventEmitter<Reservation>();
reservation:Reservation = new Reservation();
  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice() {
    if(this.reservation.from && this.reservation.to) {
      let diffDays = this.reservation.calculateDateDifference();
      if(diffDays < 1 || diffDays > 7) {
        console.log("Out of scope");
        this.reservation.price = 0;
      }

      for(let i = 0; i < this.skiPassPrice.length; i++) {
        if(this.skiPassPrice[i].duration == diffDays) {
          this.reservation.price = this.skiPassPrice[i].price;
          break;
        }
      }
    }
  }

  saveReservation() {
    if(!this.reservation.firstName || !this.reservation.lastName || !this.reservation.price) {
      alert("Invalid form values.");
      return;
    }
    this.newReservation.emit(this.reservation);
    this.reservation = new Reservation();
  }
}

