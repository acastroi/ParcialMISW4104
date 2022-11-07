import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculos: Array<Vehiculo> = new Array<Vehiculo>();
  vehiculosByMarca: any = [];

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.countByMarca();
    });
  }

  countByMarca() {

    var sortVehiculos = this.vehiculos.map(item =>item);
    sortVehiculos.sort((a, b) => (a.marca! > b.marca! ? 1 : -1));

    var count = 0;
    var ind = 0;
    var marca: string = sortVehiculos[0].marca;
    var resul: any = [];
    var groupMarca: any = {};

    sortVehiculos.forEach(item => {
      if (marca == item.marca) {
        count ++;
      }
      else {
        groupMarca = { marca: marca, cantidad: count};
        marca = item.marca;
        count = 1;
        this.vehiculosByMarca[ind++] = groupMarca;
      }
    });

    groupMarca = {marca: marca, cantidad: count};
    this.vehiculosByMarca[ind] = groupMarca;

    console.log(JSON.stringify(resul));

    return resul;

  }

}
