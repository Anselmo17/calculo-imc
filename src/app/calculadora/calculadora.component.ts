import {Component, OnInit} from '@angular/core';
import {ImplicitReceiver} from '@angular/compiler';

@Component({selector: 'app-calculadora', templateUrl: './calculadora.component.html', styleUrls: ['./calculadora.component.css']})
export class CalculadoraComponent implements OnInit {

  peso : number;
  altura : number;
  idade : string;
  imcCorporal : any;
  mensagemUsuario : string;
  resultImc : boolean = false;


  constructor() {}

  ngOnInit() {}


  encontraImc() {
    let alturaFormatada = this.altura.toString().replace(/,/g, ".");
    const alt = Number(alturaFormatada);
    const pesoPessoa = Number(this.peso.toString().substring(0, 2));

    this.imcCorporal = (pesoPessoa / (alt * alt)).toPrecision(4);
    const imc = Number(this.imcCorporal);
    this.mensagemUsuario = this.mensagemImcCorporal(imc);
    this.resultImc = true;
  }

  validaCampo(event) {
    let field = event.target.value.replace(/,/g, "").replace(/\D/g, "");
    const formatField = field.length > 1 ? `${
      field[0]
    },` + field.substring(1, field.length) : field;

    const name = event.target.name;
    this[name] = formatField;
    return formatField;
  }

  validaPeso(event) {
    let field = event.target.value.replace(/\D/g, "");
    const formatField = field.length > 2 ? `${
      field[0] + field[1]
    },` + field.substring(2, field.length) : field;

    const name = event.target.name;
    this[name] = formatField;
    return formatField;
  }

  mensagemImcCorporal(imc) {

    let resultado;

    if (imc < 18.5) 
      resultado = 'Magreza';
     else if (imc >= 25 && imc <= 29.9) 
      resultado = 'Sobrepeso';
     else if (imc >= 30 && imc <= 39.9) 
      resultado = 'Obesidade';
     else if (imc > 40) 
      resultado = 'Obesidade Grave';
     else 
      resultado = 'Normal';
    
    return resultado;
  }


  limparImc() {
    this.resultImc = false;
  }
}
