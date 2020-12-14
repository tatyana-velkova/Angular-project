
import { Subject } from 'rxjs';
import { Pet } from './pet.model';

export class PetService {
  petChanged = new Subject<Pet[]>();

  private pets: Pet[] = [
    new Pet('Sofia', 'unknown', 0, '0878453245',
    'This wonderful dog needs a new home!', 'https://m.netinfo.bg/media/images/30881/30881634/640-420-kuchence-pogylna-lyzhica-ozadachi-veterinarite.jpg'),
    new Pet ('Plovdiv', 'unknown', 1, '0879678567',
    'Give this nice dog a new home!', 'https://cdn.pixabay.com/photo/2018/11/13/16/17/puppy-3813395_960_720.jpg')
  ];


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
  }
}
