import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
})
export class EventListComponent {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data: any[]) => {
        console.log('Fetched events:', data); // Check if events are fetched correctly
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  openBookingModal(event: any): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: { ...event }, // Pass event data to modal
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookEvent(result, event.id); // Book the event if user confirmed
      }
    });
  }

  bookEvent(userData: any, eventId: number): void {
    this.eventService.bookEvent(userData, eventId).subscribe(
      (response) => {
        console.log('Event booked successfully:', response);
      },
      (error) => {
        console.error('Error booking event:', error);
      }
    );
  }

  openBookingPage(event: any): void {
    console.log('Navigating to book event page with event id:', event.id);
    // Navigate to the booking page with the event ID
    this.router.navigate(['/book-event', event.id]);
  }
}
