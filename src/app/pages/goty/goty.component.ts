import { compileComponentFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService ) { }

  ngOnInit(){

    this.gameService.getNominado()
    .subscribe( juegos => {
      console.log(juegos);
      this.juegos = juegos;
    });

  }

  Votar( juego: Game ){

  this.gameService.VotarGuego( juego.id )
     .subscribe( resp => {

      console.log(resp);
     });
  }

}
