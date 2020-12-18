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
import { HotelComponent } from './hotel/hotel.component';
import { HotelInfoComponent } from './hotel/hotel-info/hotel-info.component';
import { HotelBookingComponent } from './hotel/hotel-booking/hotel-booking.component';
import { ArticleResolverService } from './blog/article-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/pets', pathMatch: 'full'},
  {path: 'pets', component: PetsComponent, canActivate: [AuthGuard], resolve: [PetResolverService],  children: [
    {path: '', component: PetInitialComponent},
    {path: 'new', component: PetEditComponent},
    {path: ':id', component: PetDetailComponent},
    {path: ':id/edit', component: PetEditComponent}
  ]},
  {path: 'blog', component: BlogComponent,canActivate: [AuthGuard], resolve: [ArticleResolverService], children: [
    {path: 'new', component: ArticleEditComponent},
    {path: ':id', component: ArticleDetailComponent},
    {path: ':id/edit', component: ArticleEditComponent}
  ]},
  {path: 'auth', component: AuthComponent},
  {path: 'hotel', component: HotelComponent, children: [
    {path: 'book', component: HotelBookingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
