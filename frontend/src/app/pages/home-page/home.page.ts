import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  experienciaData: any = [
    {
      name: 'Ingeniero',
      date: '2020-2024',
      location: 'Buenos Aires, Argentina.',
      url: 'logo-google.jpg'
    },
    {
      name: 'Developer',
      date: '2018-2020',
      location: 'Buenos Aires, Argentina.',
      url: 'Microsoft_logo.png'
    }
  ];

  educacionData: any = [
    {
      name: 'Ingeniería en informática',
      date: '2023-2027',
      location: 'Buenos Aires, Argentina.',
      url: 'utn.png'
    },
    {
      name: 'Bachillerato en economía y administración',
      date: '2018-2022',
      location: 'Buenos Aires, Argentina.',
      url: 'ecea.png'
    }
  ]
  
  proyectosData: any = [
    {
      name: 'Pomodoro Clock',
      description: 'Reloj para aumentar la efectividad del estudio o el trabajo.',
      url: 'https://codepen.io/joaquinguerrini/full/abEwrmm'
    },
    {
      name: 'Markdown previewer',
      description: 'Visualizador de markdown.',
      url: 'https://codepen.io/joaquinguerrini/full/Exobjqy'
    },
    {
      name: 'Drum Machine',
      description: 'Teclado con sonidos de percusión.',
      url: 'https://codepen.io/joaquinguerrini/full/ZEvRmZm'
    },
    {
      name: 'Calculadora',
      description: 'Calculadora.',
      url: 'https://codepen.io/joaquinguerrini/full/qBpNawe'
    },
    {
      name: 'Random quote machine',
      description: 'Mostrador de frases aleatorias.',
      url: 'https://codepen.io/joaquinguerrini/full/qBpNawe'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
