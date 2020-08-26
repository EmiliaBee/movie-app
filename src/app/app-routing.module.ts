  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistingComponent } from './components/movielisting/movielisting.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { BookingComponent } from './components/booking/booking.component';


const routes: Routes = [
  { path: 'movies', component: MovielistingComponent },
  { path: 'moviedetail/:id', component: MoviedetailComponent },
  
  { path: 'booking/:id/:tm', component: BookingComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }