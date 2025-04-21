import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'hotel-box',
  imports: [CurrencyPipe],
  templateUrl: './hotel-box.component.html',
  styleUrl: './hotel-box.component.scss'
})
export class HotelBoxComponent {
  hotel = input({id: "0",name: "", address: "", price: 1, rating: 0, flags: 0 });
  flags = computed(() => new HotelFlags(this.hotel().flags));
  rating = computed(() => this.hotel().rating);
  reviewCount = input(0);
}

export class HotelFlags {

  flags = 0;

  constructor(flags: number) {
    this.flags = flags;
  }

  get ac() {
    return (this.flags & 1) == 1;
  }

  get freeParking() {
    return (this.flags & 0b10) == 0b10;
  }

  get freeWifi() {
    return (this.flags & 0b100) == 0b100;
  }

  get gym() {
    return (this.flags & 0b1000) == 0b1000;
  }
  
  get restaurant() {
    return (this.flags & 0b10000) == 0b10000;
  }
}