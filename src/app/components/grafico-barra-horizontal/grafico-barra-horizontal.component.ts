import { Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  result: any[]= [
    {
      "name": "The Last of Us Part II",
      "value": 8940000
    },
    {
      "name": "Hades",
      "value": 5000000
    },
    {
      "name": "Halt-Life: Alyx",
      "value": 7200000
    },
    {
      "name": "Destiny 2",
      "value": 8700000
    }
  ];
  

  
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor(){

   this.intervalo = setInterval(()=>{
      console.log('tick');

      const newResult = [...this.result];

      for (let i  in newResult ) {
        newResult[i].value = Math.round( Math.random() * 500)
        
      }

      this.result=[...newResult];

    }, 3600);


  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    clearInterval( this.intervalo );
    
  }

}
