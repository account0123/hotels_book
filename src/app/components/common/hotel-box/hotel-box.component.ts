import { CurrencyPipe } from '@angular/common';
import { Component, computed, Input, input } from '@angular/core';
import { Hotel } from '../../../typings/Schema';
import { ServiceIconPipe } from './service-icon.pipe';

@Component({
  selector: 'hotel-box',
  imports: [CurrencyPipe, ServiceIconPipe],
  templateUrl: './hotel-box.component.html',
  styleUrl: './hotel-box.component.scss'
})
export class HotelBoxComponent {
  @Input() hotel: Hotel|undefined;
  rating = computed(() => this.hotel?.averageCalification);
  reviewCount = input(0);
}
