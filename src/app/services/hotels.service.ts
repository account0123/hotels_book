import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../typings/Schema';

const BASE_URL = 'http://localhost:8000';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private client: HttpClient) { }

  getHotels(startDate: string, endDate: string, city: string) {
    // Type checking
    if (typeof startDate != 'string') throw TypeError('startDate must be a string');
    if (typeof endDate != 'string') throw TypeError('endDate must be a string');
    if (typeof city != 'string') throw TypeError('city must be a string');
    // Encode search parameters
    const params = new URLSearchParams({ startDate, endDate, city, withServices: 'true', withReviews: 'true' });
    return this.client.get<Hotel[]>(`${BASE_URL}/hotels/available?${params.toString()}`);
  }
}
