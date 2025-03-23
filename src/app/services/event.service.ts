import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:5000/api'; // URL of your backend API

  constructor(private http: HttpClient) {}

  // Method to fetch events
  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }

  getEvent(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Method to create an event
  createEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/events`, eventData);
  }

  // Method to book an event
  bookEvent(userData: any, eventId: number): Observable<any> {
    const bookingData = { ...userData, eventId };
    return this.http.post(`${this.apiUrl}/bookings`, bookingData);
  }
}
