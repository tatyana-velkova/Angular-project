import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetInitialComponent } from './pets/pet-initial/pet-initial.component';
import { PetsComponent } from './pets/pets.component';
import { PetResolverService} from './pets/pet-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/pets', pathMatch: 'full'},
  {path: 'pets', component: PetsComponent, resolve: [PetResolverService],  children: [
    {path: '', component: PetInitialComponent},
    {path: 'new', component: PetEditComponent},
    {path: ':id', component: PetDetailComponent},
    {path: ':id/edit', component: PetEditComponent}
  ]},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
