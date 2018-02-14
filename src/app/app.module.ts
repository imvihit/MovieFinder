import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpModule , JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import  {ModuleWithProviders} from '@angular/core';;

const  appRoutes: Routes = [
  {path : '', component : MoviesComponent},
  {path : 'movie/:id', component : MovieComponent},
];
// export const appRoutingProviders : any[] = [];
 //export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule, HttpModule , JsonpModule , FormsModule , ReactiveFormsModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
