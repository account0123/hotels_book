import { Component } from '@angular/core';
import { HotelBoxComponent } from '../../common/hotel-box/hotel-box.component';

@Component({
  selector: 'hotel-grid',
  imports: [HotelBoxComponent],
  templateUrl: './hotel-grid.component.html',
  styleUrl: './hotel-grid.component.scss'
})
export class HotelGridComponent {
  hoteles = new Array(30);
  precios = [100, 200, 300, 400, 500];
}
