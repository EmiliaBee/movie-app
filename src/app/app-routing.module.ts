import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovielistingComponent } from './components/movielisting/movielisting.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';


const routes: Routes = [
  {path: 'movies', component: MovielistingComponent },
  {path: 'moviedetail/:id', component: MoviedetailComponent },
  {path: '', redirectTo: '/movies', pathMatch: 'full'}, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
