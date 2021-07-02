import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Movie }from './movies.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  movies = [];

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get<any>('https://www.omdbapi.com/?i=tt3896198&apikey=60f3ec');
  }

}
