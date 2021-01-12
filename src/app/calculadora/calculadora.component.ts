import {Component, OnInit} from '@angular/core';
import {ImplicitReceiver} from '@angular/compiler';

@Component({selector: 'app-calculadora', templateUrl: './calculadora.component.html', styleUrls: ['./calculadora.component.css']})
export class CalculadoraComponent implements OnInit {

  peso : number;
  altura : number;
  idade : string;

  constructor() {}

  ngOnInit() {}


  findImc() {

    const alt = Number(this.altura);
    const pesoPessoa = Number(this.peso);

    const imc = pesoPessoa / (alt * alt);
    console.log('===========', imc);
    return imc;
  }

  validaCampo(event) {
  let field = event.target.value.replace(",","");
   const formatField = field.length > 1 ? `${field[0]},`+field.substring(1 , field.length) : field;
    console.log(event);
    const name = event.target.name; 
    this[name] = formatField;
    return formatField;
  }


}
