export class Vehiculo {
  id: number;
  marca: string;
  linea: string;
  modelo: string;

  constructor(id: number, marca: string, linea: string, modelo: string) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.modelo = modelo;
  }
}
