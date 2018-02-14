import { Component, OnInit } from '@angular/core';
import  { MovieService} from "../movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'] ,

})
export class MoviesComponent implements OnInit {
  popularList: Array<object>;
  theatersList: Array<object>;
  searchStr: string;
  searchRes: Array<object>;

  constructor(private _movieService : MovieService) {
    this._movieService.getpopoular().subscribe(res => {
      this.popularList = res.results;
      console.log(this.popularList);
    });
    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
      console.log(this.theatersList);
    });
  }
    searchMovies(){
      this._movieService.searchMovies(this.searchStr).subscribe(res => {
        this.searchRes = res.results;
        console.log(this.searchRes);
      });
    }


  ngOnInit() {
  }

}
