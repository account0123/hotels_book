import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelGridComponent } from '../hotel-grid/hotel-grid.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../typings/Schema';

@Component({
  selector: 'app-home',
  imports: [
    DpDatePickerModule,
    HotelGridComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  hotels: Hotel[] = [];
  availableHotelForm: FormGroup<{
    startDate: FormControl<string|null>;
    endDate: FormControl<string|null>;
    city: FormControl<string|null>;
  }>;

  constructor(private service: HotelsService, private fb: FormBuilder) {
    this.availableHotelForm = this.fb.group({
      startDate: [new Date().toISOString().split("T")[0], Validators.required],
      endDate: ["", Validators.required],
      city: ["", Validators.required]
    });
  }

  fetchAvailableHotels() {
    const { startDate, endDate, city } = this.availableHotelForm.value;

    this.service.getHotels(startDate || "", endDate || "", city || "").subscribe((hotels) => {
      this.hotels = hotels;
    });
  }

  datePickerConfig = {
    format: 'YYYY-MM-DD'
  };
}
