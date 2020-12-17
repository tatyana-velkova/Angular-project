
import { Subject } from 'rxjs';
import { Pet } from './pet.model';

export class PetService {
  petChanged = new Subject<Pet[]>();

  private pets: Pet[] = [];


  getPets(){
    return this.pets;
  }

  getPet(index: number){
    return this.pets[index];
  }

  addPet(pet: Pet){
    this.pets.push(pet);
    this.petChanged.next(this.pets.slice());
  }

  updatePet(index:number, newPet: Pet){
    this.pets[index] = newPet;
    this.petChanged.next(this.pets.slice());
  }

  deletePet(index: number){
    this.pets.splice(index, 1);
    this.petChanged.next(this.pets.slice());
  }

  setPets(pets: Pet[]){
    this.pets = pets;
    this.petChanged.next(this.pets.slice());
  }
}
