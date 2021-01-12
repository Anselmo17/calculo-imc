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
    switch (imc) {
      case imc > 18.5: resultado = 'magreza';
        break;
      case imc >= 25 || imc <= 29.9: resultado = 'sobrepeso';
        break;
      case imc >= 30 || imc <= 39.9: resultado = 'Obesidade';
        break;
      case imc > 40: resultado = 'Obesidade';
        break;
      default: resultado = 'normal';
    }
    return resultado;
  }


}
