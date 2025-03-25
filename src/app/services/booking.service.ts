import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'https://event-booking-c8jf.onrender.com/api';

  constructor(private http: HttpClient) {}

  bookEvent(booking: Booking): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookings`,booking);
  }
}
