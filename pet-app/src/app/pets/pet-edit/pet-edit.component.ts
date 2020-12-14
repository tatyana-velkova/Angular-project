import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  id: number;
  editMode = false;
  petForm: FormGroup;

  constructor(private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  submit(){
    const newPet: Pet = new Pet(this.petForm.value['location'], this.petForm.value['breed'],
    this.petForm.value['age'], this.petForm.value['phoneNumber'], this.petForm.value['description'],
    this.petForm.value['imagePath'])

    if(this.editMode){
      this.petService.updatePet(this.id, newPet);
    }else {
      this.petService.addPet(newPet);
    }
  }


  private initForm(){
    let petLocation = '';
    let petBreed = '';
    let petAge = 0;
    let petDescription = '';
    let petOwnerNumber = '';
    let petImagePath = '';

    if(this.editMode){
      const pet = this.petService.getPet(this.id);

      petLocation = pet.location;
      petBreed = pet.breed;
      petAge = pet.age;
      petDescription = pet.description;
      petOwnerNumber = pet.phoneNumber;
      petImagePath = pet.imagePath;
    }

    this.petForm = new FormGroup({
      'location': new FormControl(petLocation, Validators.required),
      'breed': new FormControl(petBreed, Validators.required),
      'age': new FormControl(petAge, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/)
      ]),
      'description': new FormControl(petDescription, Validators.required),
      'phoneNumber': new FormControl(petOwnerNumber, Validators.required),
      'imagePath': new FormControl(petImagePath, Validators.required)
    });
  }

}
