import { Component } from '@angular/core';
import { HotelBoxComponent } from '../../common/hotel-box/hotel-box.component';

@Component({
  selector: 'hotel-grid',
  imports: [HotelBoxComponent],
  templateUrl: './hotel-grid.component.html',
  styleUrl: './hotel-grid.component.scss'
})
export class HotelGridComponent {
  hoteles = [
    {id: '1',name: 'Hotel California', address: 'Los Angeles 322, California', price: 200, flags: 31, rating: 4.8},
    {id: '2',name: 'Hotel Transilvania', address: 'Los Muermos 111, Transilvania', price: 250, flags: 31, rating: 4.7},
    {id: '3',name: 'Hotel ISBI', address: 'Marcoleta 144, Santiago', price: 150, flags: 31, rating: 4.7},
  ]
  precios = [100, 200, 300, 400, 500];
}
