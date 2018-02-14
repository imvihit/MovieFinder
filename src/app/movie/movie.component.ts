import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {MovieService} from "../movie.service";

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie : object;

  constructor(private router:ActivatedRoute , private _movieService :MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie ;
      })
    });
  }

}
