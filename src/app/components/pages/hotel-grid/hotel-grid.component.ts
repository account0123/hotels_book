import { Component, Input, input, InputSignal } from '@angular/core';
import { HotelBoxComponent } from '../../common/hotel-box/hotel-box.component';
import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../typings/Schema';


@Component({
  selector: 'hotel-grid',
  imports: [HotelBoxComponent],
  templateUrl: './hotel-grid.component.html',
  styleUrl: './hotel-grid.component.scss'
})
export class HotelGridComponent {
  @Input() hoteles: Hotel[] = [];

  precios = [100, 200, 300, 400, 500];
}
