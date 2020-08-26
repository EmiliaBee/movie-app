import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import {MovieService} from 'src/app/services/movie.service';




@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {

  movies: Movie[] = [];

  searchMovie: string;
  constructor(private movieService: MovieService) {}


  ngOnInit(): void {

    this.getMovieListing();
  }

  getMovieListing() {
    this.movieService.getListOfMovies().subscribe(movies => this.movies = movies);

  }

}
