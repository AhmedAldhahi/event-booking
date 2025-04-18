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
  events: any[] = [
    {
      id: 1,
      name: 'Tech Expo 2025',
      date: '2025-05-10',
      location: 'Amman',
      description:
        'A large technology exhibition showcasing startups and innovation.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Frontend Bootcamp',
      date: '2025-04-20',
      location: 'Online',
      description: 'Intensive hands-on frontend development workshop.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Gaming Festival',
      date: '2025-06-15',
      location: 'Dubai',
      description: 'Celebrating gaming culture with tournaments and giveaways.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'AI & ML Conference',
      date: '2025-05-30',
      location: 'Cairo',
      description: 'Experts discuss the future of artificial intelligence.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5, 
      name: 'Startup Pitch Night',
      date: '2025-04-28',
      location: 'Amman',
      description: 'Entrepreneurs pitch to local investors.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      name: 'Design Sprint',
      date: '2025-07-01',
      location: 'Remote',
      description: 'Collaborative product design event for teams.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      name: 'DevOps Day',
      date: '2025-06-01',
      location: 'Beirut',
      description: 'Sessions on CI/CD, containerization, and cloud tooling.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      name: 'Cybersecurity Summit',
      date: '2025-05-15',
      location: 'Riyadh',
      description: 'How to defend infrastructure in the modern age.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      name: 'Hackathon 24H',
      date: '2025-05-05',
      location: 'Zarqa',
      description:
        'Teams race against the clock to build projects in 24 hours.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      name: 'React Day',
      date: '2025-04-25',
      location: 'Online',
      description: 'A one-day conference focused on React and its ecosystem.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  hoveredEvent: any = null;

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
      (response: any) => {
        console.log('Event booked successfully:', response);
      },
      (error: any) => {
        console.error('Error booking event:', error);
      }
    );
  }

  openBookingPage(event: any): void {
    // console.log('Navigating to book event page with event id:', event.id);
    // Navigate to the booking page with the event ID
    this.router.navigate(['/book-event', event.id]);
  }
}
