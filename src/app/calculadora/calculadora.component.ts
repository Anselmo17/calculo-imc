import {Component, OnInit} from '@angular/core';
import {ImplicitReceiver} from '@angular/compiler';

@Component({selector: 'app-calculadora', templateUrl: './calculadora.component.html', styleUrls: ['./calculadora.component.css']})
export class CalculadoraComponent implements OnInit {

  peso : number;
  altura : number;
  idade : string;
  imcCorporal : any;
  mensagemUsuario : string;

  constructor() {}

  ngOnInit() {}


  encontraImc() {
    let alturaFormatada = this.altura.toString().replace(/,/g, ".");
    const alt = Number(alturaFormatada);
    const pesoPessoa = Number(this.peso);

    this.imcCorporal = (pesoPessoa / (alt * alt)).toPrecision(4);
    const imc = Number(this.imcCorporal);
    this.mensagemUsuario = this.mensagemImcCorporal(imc);
  }

  validaCampo(event) {
    let field = event.target.value.replace(/,/g, "");
    const formatField = field.length > 1 ? `${
      field[0]
    },` + field.substring(1, field.length) : field;

    const name = event.target.name;
    this[name] = formatField;
    return formatField;
  }

  mensagemImcCorporal(imc) {

    let resultado;
    
      if(imc < 18.5)
        resultado = 'magreza';
      else if(imc >= 25 && imc <= 29.9)
        resultado = 'sobrepeso';
      else if(imc >= 30 && imc <= 39.9)
        resultado = 'Obesidade';
      else if(imc > 40)
        resultado = 'Obesidade Grave';
      else 
        resultado = 'normal';
    
    return resultado;
  }


}
