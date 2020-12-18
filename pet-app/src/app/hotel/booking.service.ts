import { Subject } from "rxjs";
import { Booking } from "./booking.model";

export class BookingService {
private booking: Booking = null;
bookingChanged = new Subject<Booking>();

setBooking(booking: Booking){
  this.booking = booking;
  console.log(booking);
  this.bookingChanged.next(this.booking);
}

getBooking(){
  return this.booking;
}



}


