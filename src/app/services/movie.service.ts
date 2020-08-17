import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService { 
  private moviesUrl = 'https://college-movies.herokuapp.com/';

  constructor(private http: HttpClient) { }

getListOfMovies() : Observable<Movie[]> {
  return this.http.get<Movie[]>(this.moviesUrl);
}
}
