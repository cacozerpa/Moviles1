/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie }from './movies.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovies(){
    return this.httpClient.get<>('http://www.omdbapi.com/?apikey=60f3ec&t=godfather');
  }

}
