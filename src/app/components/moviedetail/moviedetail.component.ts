import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {


  constructor(private route:ActivatedRoute, private movieService: MovieService) { 
    console.log("Running")
  }
  movieId = 0;
  public movie: Movie;
  days_of_week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  ngOnInit(): void {
    this.getMovieListing();
  }

getMovieListing() {
  this.movieId = +this.route.snapshot.paramMap.get('id');
  this.movieService.getListOfMovies().subscribe(movies => {
    this.movie = movies.find(movie => movie.id == this.movieId);
  
    console.log(this.movie.runningTimes);
  });
}

}
