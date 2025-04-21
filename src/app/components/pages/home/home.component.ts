import { Component } from '@angular/core';
import {DpDatePickerModule} from 'ng2-date-picker';
import { HotelGridComponent } from '../hotel-grid/hotel-grid.component';

@Component({
  selector: 'app-home',
  imports: [
    DpDatePickerModule,
    HotelGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  datePickerConfig = {
    format: 'DD-MM-YYYY',
  };

}
