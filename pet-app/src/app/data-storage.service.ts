import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { PetService } from "./pets/pet.service";
import { Pet } from "./pets/pet.model";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private petService: PetService){
  }

  storePets(){
    const pets = this.petService.getPets();
    this.http.put('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json', pets)
    .subscribe(response => {
      console.log(response);
    });

  }

  fetchPets(){
    return this.http.get<Pet[]>('https://app-pet-f2912-default-rtdb.europe-west1.firebasedatabase.app/pets.json')
    .pipe(
      tap(pets => {
      this.petService.setPets(pets);
    }));
  }


}
