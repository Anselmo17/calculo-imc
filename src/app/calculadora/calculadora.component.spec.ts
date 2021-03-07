import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculadoraComponent } from './calculadora.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        CalculadoraComponent
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
