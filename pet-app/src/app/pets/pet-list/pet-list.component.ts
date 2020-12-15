import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {
  pets: Pet[];
  subscription: Subscription;

  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.petService.petChanged.subscribe(
      (pets: Pet[]) => {
        this.pets = pets;
      }
    )
    this.pets = this.petService.getPets();
  }

  addItem(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
