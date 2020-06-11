import { Component, OnInit } from '@angular/core';
import { BusFilter } from '../bus-filter';
import { BusService } from '../bus.service';
import { Bus } from '../bus';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-bus',
  templateUrl: 'Bus-list.component.html'
})
export class BusListComponent implements OnInit {

  filter = new BusFilter();
  selectedBus: Bus;
  feedback: any = {};

  get busList(): Bus[] {
    return this.busService.busList;
  }

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.busService.load(this.filter);
  }

  select(selected: Bus): void {
    this.selectedBus = selected;
  }

  descargar() {
    saveAs('http://localhost:8000/api/download/bus', 'buses.json');
  }

  delete(bus: Bus): void {
    if (confirm('Está seguro de inhabilitar el Bus con placa ' + bus.placabus)) {
      this.busService.delete(bus).subscribe(() => {
          this.feedback = {type: 'success', message: 'El Bus ha sido deshabilitada'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al deshabilitar'};
        }
      );
    }
  }
}
