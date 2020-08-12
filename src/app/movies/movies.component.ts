import { Component, OnInit } from '@angular/core';
import { ThemoviedbApiService } from "../services/themoviedb-api.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
  providers:  [ ThemoviedbApiService ]
})
export class MoviesComponent implements OnInit {

  movies: any[];

  constructor(private themoviedbApiService: ThemoviedbApiService) { }

  ngOnInit(): void {
    this.themoviedbApiService.getMovies().subscribe((movies: any) => {
      let movs: any[] = movies.results
      this.movies = movs.sort((movA, movB) => movB.vote_average - movA.vote_average);
    });
  }

}
