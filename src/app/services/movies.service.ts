/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Movie }from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [
    {
      id: '1',
      title: 'infinite',
      imageURL:'https://m.media-amazon.com/images/M/MV5BNGNiOTBkYzUtMzdiNi00ZTlmLWI3M2EtNWU2ODZiNDA4NzA1XkEyXkFqcGdeQXVyNTkyODg0Njk@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
      comments: ['awesome', 'wonderful experience']
    },
    {
      id: '2',
      title: 'SkyFall',
      imageURL:'https://th.bing.com/th/id/OIP.0gIIum5aT5tT3dYNiwwAQgHaKj?pid=ImgDet&rs=1',
      comments: ['awesome', 'wonderful experience']
    },
    {
      id: '3',
      title: 'The Hustle',
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg',
      comments: []
    },
  ];
  constructor() { }

  getMovies(): Movie[] {
    return [...this.movies];
  }

  getMovie(movieId: string) {
   return {
    ...this.movies.find(movie =>
     movie.id === movieId
    )
   };
  }
}
