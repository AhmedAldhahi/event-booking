import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient) {}

  bookEvent(eventId: number, booking: { name: string, email: string, phone: string }): Observable<any> {
    return this.http.post(`/api/bookings`, { ...booking, eventId });
  }
}
