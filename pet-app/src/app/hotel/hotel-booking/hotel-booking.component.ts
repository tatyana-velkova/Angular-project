import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/data-storage.service';
import { Booking } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {
  bookingForm: FormGroup;



  constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.initForm();
  }


  private initForm(){
    let ownerName = '';
    let petBreed = '';
    let petAge = 0;
    let petOwnerNumber = '';
    let startDate = new Date();
    let endDate = new Date();

    this.bookingForm = new FormGroup({
      'owner': new FormControl(ownerName, Validators.required),
      'breed': new FormControl(petBreed, Validators.required),
      'age': new FormControl(petAge, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/)
      ]),
      'phoneNumber': new FormControl(petOwnerNumber, Validators.required),
      'start': new FormControl(startDate),
      'end': new FormControl(endDate)
    });
  }


  submit(){
    const newBooking: Booking = new Booking(this.bookingForm.value['owner'], this.bookingForm.value['breed'],
    this.bookingForm.value['age'], this.bookingForm.value['phoneNumber'], this.bookingForm.value['start'],
    this.bookingForm.value['end']);

      this.bookingService.setBooking(newBooking);
      this.dataStorageService.storeBooking().subscribe();
      this.router.navigate(['../'], {relativeTo: this.route});

  }

  cancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
