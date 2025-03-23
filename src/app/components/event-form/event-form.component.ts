import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service'; // Ensure your EventService is correctly imported
import { BookingService } from '../../services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  eventId!: number;
  event: any; // Store event data
  booking = { name: '', email: '', phone: '' }; // Booking data model
  bookEventForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?\d{10,15}$/),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService, // Inject EventService for fetching events
    private bookingService: BookingService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
  this.eventService.getEvent(this.eventId).subscribe((event: any) => {
    this.event = event;
    console.log('Fetched event:', this.event);  // Check if the correct event is fetched
  });
  }

  // Getter methods to access form controls
  get name() {
    return this.bookEventForm.get('name');
  }

  get email() {
    return this.bookEventForm.get('email');
  }

  get phoneNumber() {
    return this.bookEventForm.get('phoneNumber');
  }

  // Submit booking form and show confirmation
  saveData(): void {
    if (this.bookEventForm.valid) {
      console.log('✅ Form submitted:', this.bookEventForm.value);

      // Open confirmation modal
      this.dialog.open(ConfirmationModalComponent, {
        data: this.bookEventForm.value,
        width: '400px',
        disableClose: true,
      });
    } else {
      console.log('❌ Invalid form');
    }
  }
}
