import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = [];
  constructor(private moviesServices: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movies = this.moviesServices.getMovies();
  }

  ionViewWillEnter() {
    this.movies = this.moviesServices.getMovies();
  }

}
