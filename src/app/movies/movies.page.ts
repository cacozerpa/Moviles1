import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

    movies = [] ;

  constructor(private moviesServices: MoviesService) { }

  ngOnInit() {
    this.moviesServices.getMovies()
    .subscribe(data => {
      console.log(data.Title)
      this.movies = Array.of(data)
      console.log(this.movies)
    })
  }

  // ionViewWillEnter() {
    
  // }

}
