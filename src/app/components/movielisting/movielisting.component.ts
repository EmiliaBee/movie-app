import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import {MovieService} from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}


  ngOnInit(): void {

    this.getMovieListing();
  }

  getMovieListing() {
    this.movieService.getListOfMovies().subscribe(movies => this.movies = movies);

  }

}
