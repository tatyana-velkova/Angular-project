import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetInitialComponent } from './pets/pet-initial/pet-initial.component';
import { PetsComponent } from './pets/pets.component';
import { PetResolverService} from './pets/pet-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ArticleEditComponent } from './blog/article-edit/article-edit.component';
import { ArticleDetailComponent } from './blog/article-detail/article-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/pets', pathMatch: 'full'},
  {path: 'pets', component: PetsComponent, canActivate: [AuthGuard], resolve: [PetResolverService],  children: [
    {path: '', component: PetInitialComponent},
    {path: 'new', component: PetEditComponent},
    {path: ':id', component: PetDetailComponent},
    {path: ':id/edit', component: PetEditComponent}
  ]},
  {path: 'blog', component: BlogComponent, children: [
    {path: 'new', component: ArticleEditComponent},
    {path: ':id', component: ArticleDetailComponent},
    {path: ':id/edit', component: ArticleEditComponent}
  ]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
