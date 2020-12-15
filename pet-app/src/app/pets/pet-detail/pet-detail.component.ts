import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;
  id: number;

  constructor(private petService: PetService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.pet = this.petService.getPet(this.id);
      }
    )
  }

  editPet(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deletePet(){
    this.petService.deletePet(this.id);
    this.router.navigate(['/pets']);
  }

}
