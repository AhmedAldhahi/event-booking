import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { EventService } from '../../services/event.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrl: './book-event.component.css',
})
export class BookEventComponent {
  events: any[] = [];
  showModal = false;
  selectedEvent: any = null;
  booking = { name: '', email: '', phoneNumber: '' };

  constructor(
    private eventService: EventService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
