import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { BlogComponent } from './blog/blog.component';
import { PetItemComponent } from './pets/pet-list/pet-item/pet-item.component';
import { RouterModule } from '@angular/router';
import { PetService } from './pets/pet.service';
import { PetInitialComponent } from './pets/pet-initial/pet-initial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetsComponent,
    PetListComponent,
    PetDetailComponent,
    PetEditComponent,
    BlogComponent,
    PetItemComponent,
    PetInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
