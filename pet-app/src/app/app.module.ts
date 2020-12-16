import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { DataStorageService } from './data-storage.service';
import { PetResolverService} from './pets/pet-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

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
    PetInitialComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PetService, DataStorageService, PetResolverService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
