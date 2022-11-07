/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Vehiculo } from './vehiculo';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';

describe('Service: Vehiculo', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;

    const vehiculo1 = new Vehiculo(
      10, 'BMW', 'Sport', '2010'
    );
    const vehiculo2 = new Vehiculo(
      11, 'Mercedez', 'i10', '2002'
    );
    const vehiculo3 = new Vehiculo(
      12, 'Maserati', 'BlueSea', '2012'
    );

    component.vehiculos.push(vehiculo1);
    component.vehiculos.push(vehiculo2);
    component.vehiculos.push(vehiculo3);

    debug = fixture.debugElement;

  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  it('should have 12 <td> elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(12)
  });


});
