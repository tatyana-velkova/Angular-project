import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../data-storage.service";
import { Pet } from "./pet.model";
import { PetService } from "./pet.service";



@Injectable({providedIn: 'root'})
export class PetResolverService implements Resolve<Pet[]>{

  constructor(private dataStorageService: DataStorageService,
              private petService: PetService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const pets = this.petService.getPets();

    if(pets.length === 0){
      return this.dataStorageService.fetchPets();
    } else{
      return pets;
    }

  }

}
