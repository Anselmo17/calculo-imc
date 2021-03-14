import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

import {CalculadoraComponent} from './calculadora.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, RouterTestingModule
      ],
      declarations: [CalculadoraComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should encontrarImc', () => {
    component.resultImc = true;
    component.altura = 1.75;
    component.peso = 90.0;
    component.encontraImc();
    expect(component.resultImc).toBeTruthy();
  });

  it('should validaCampo', () => {
    const event = {
      target: {
        value: '178'
      }
    };
    const result = component.validaCampo(event);
    expect(result).toEqual('1,78');
  });

  it('should validaCampo', () => {
    const event = {
      target: {
        value: '1'
      }
    };
    const result = component.validaCampo(event);
    expect(result).toEqual('1');
  });


  it('should validaPeso', () => {
    const event = {
      target: {
        value: '990'
      }
    };
    const result = component.validaPeso(event);
    expect(result).toEqual('99,0');
  });

  it('should validaPeso', () => {
    const event = {
      target: {
        value: '90'
      }
    };
    const result = component.validaPeso(event);
    expect(result).toEqual('90');
  });

  it('should mensagemImcCorporal', () => {
    const imc = 17.5;
    const resultado = component.mensagemImcCorporal(imc);
    expect(resultado).toEqual('Magreza');
  });

  it('should mensagemImcCorporal', () => {
    const imc = 26;
    const resultado = component.mensagemImcCorporal(imc);
    expect(resultado).toEqual('Sobrepeso');
  });

  it('should mensagemImcCorporal', () => {
    const imc = 30.5;
    const resultado = component.mensagemImcCorporal(imc);
    expect(resultado).toEqual('Obesidade');
  });

  it('should mensagemImcCorporal', () => {
    const imc = 41;
    const resultado = component.mensagemImcCorporal(imc);
    expect(resultado).toEqual('Obesidade Grave');
  });

  it('should mensagemImcCorporal', () => {
    const imc = 19;
    const resultado = component.mensagemImcCorporal(imc);
    expect(resultado).toEqual('Normal');
  });

  it('should limparImc', () => {
    component.resultImc = false;
    component.limparImc();
    expect(component.resultImc).toBeFalsy();
  });
});
