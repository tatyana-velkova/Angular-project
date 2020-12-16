import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { PetService } from "./pets/pet.service";
import { Pet } from "./pets/pet.model";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "./auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private petService: PetService, private authService: AuthService){
  }

  storePets(){
    const pets = this.petService.getPets();
    this.http.put('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json', pets)
    .subscribe(response => {
      console.log(response);
    });

  }

  fetchPets(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Pet[]>('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json',
      {
        params: new HttpParams().set('auth', user.token)
      });
    }),   tap(pets => {
      this.petService.setPets(pets);
    }));
  }


}
