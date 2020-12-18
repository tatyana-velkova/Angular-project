import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { PetService } from "./pets/pet.service";
import { Pet } from "./pets/pet.model";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "./auth/auth.service";
import { ArticleService } from "./blog/article.service";
import { Article } from "./blog/article.model";
import { BookingService } from "./hotel/booking.service";
import { Booking } from "./hotel/booking.model";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private petService: PetService, private authService: AuthService,
              private articleService: ArticleService, private bookingService: BookingService){
  }

  storePets(){
    const pets = this.petService.getPets();
    console.log(pets);

    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.put('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json?auth=' + user.token, pets);
    }));
  }

  fetchPets(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Pet[]>('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json?auth=' + user.token);
    }),   tap(pets => {
      this.petService.setPets(pets);
    }));
  }


  storeArticles(){
    const articles = this.articleService.getArticles();

    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.put('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/blog.json?auth=' + user.token, articles);
    }));
  }


  fetchArticles(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Article[]>('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/blog.json?auth=' + user.token);
    }),   tap(articles => {
      this.articleService.setArticles(articles);
    }));
  }


  storeBooking(){
    let bookingStored: Booking = null;
    bookingStored = this.bookingService.getBooking();
    console.log(bookingStored);

    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.post('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/bookings.json?auth=' + user.token, bookingStored);
    }));
  }


}
