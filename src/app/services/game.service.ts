import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[]= [];

  constructor(private http: HttpClient) { }

  getNominado(){

    if ( this.juegos.length > 0) {
      console.log('Desde cache');
      return of(this.juegos);
      
    } else {

      console.log('Desde internet');

      return this.http.get<Game[]>(`${ environment.url}goty`)
      .pipe(
        tap(
          juegos => this.juegos = juegos
        )
      );
      
    }

    
  }

  VotarGuego(id: string){

    return this.http.post(`${ environment.url}goty/${id}`,{})

  }
}
