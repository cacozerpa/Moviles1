import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.page.html',
  styleUrls: ['./searchlist.page.scss'],
})
export class SearchlistPage implements OnInit {
  movies = [];
  constructor(private moviesServices: MoviesService, private router: Router) { }

  ngOnInit() {
    this.movies = this.moviesServices.getMovies();
  }

  ionViewWillEnter() {
    this.movies = this.moviesServices.getMovies();
  }

}
