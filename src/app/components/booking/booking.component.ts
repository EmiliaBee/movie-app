  
import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/movie';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  Seating: Seat[] = [
    { row: 1, col: 1 , selected: false, reserved: true},
    { row: 2, col: 1 , selected: false, reserved: false},
    { row: 3, col: 1 , selected: false, reserved: false},
    { row: 4, col: 1 , selected: false,  reserved: false},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleSeat(seat: Seat) : void {

    if (seat.reserved) return;
    seat.selected = !seat.selected;
    console.log(`Seat is selected ${seat.row}:${seat.col}`);
  }

}