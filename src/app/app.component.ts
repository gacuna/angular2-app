import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  subtitle: string;
  step: number;
  answer: string;  	

  ngOnInit() {
  	this.init();
  }

  private init() {
	  this.title = 'Tu app ya funciona!';
	  this.subtitle = 'ahora me gustaría saber cuando nos vamos a volver a ver..';
	  this.step = 1;
	  this.answer = '0';  	
  }

  nextStep() {
    this.title = 'Ya lo sabía :(';
    this.subtitle = 'pero me gusta insistir..';

    switch (this.step) {
    	case 0:
    		this.init();
    	case 1:
		    if (this.answer === '1') {
		    	this.title = 'Eso me agrada!!';
		    	this.subtitle = 'te muestro un calendario para que elijas la fecha';
		    } else {
		    	this.step++;
		    }
    		break;
    	case 2:
    		this.title = 'Genial!!';
    		this.subtitle = 'Espero que te sirva esta pequeña basofia';
    	default:
    		// code...
    		break;
    }
    this.step++;
  }

}