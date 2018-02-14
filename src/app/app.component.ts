import { Component } from '@angular/core';
import { MovieService} from "./movie.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers : [MovieService]
})
export class AppComponent {
  title = 'app';
}
