import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie }from '../services/movies.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

   movies: Movie;
  constructor(private moviesServices: MoviesService, private router: Router) { }

  ngOnInit() {
    this.moviesServices.getMovies()
    .subscribe(data => {
      this.movies = data
    })
  }

  // ionViewWillEnter() {
    
  // }

}
