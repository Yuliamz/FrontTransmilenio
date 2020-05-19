import { Component, OnInit } from '@angular/core';
import { TroncalFilter } from '../troncal-filter';
import { TroncalService } from '../troncal.service';
import { Troncal } from '../troncal';

@Component({
  selector: 'app-troncal',
  templateUrl: 'troncal-list.component.html'
})
export class TroncalListComponent implements OnInit {

  filter = new TroncalFilter();
  selectedTroncal: Troncal;
  feedback: any = {};

  get troncalList(): Troncal[] {
    return this.troncalService.troncalList;
  }

  constructor(private troncalService: TroncalService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.troncalService.load(this.filter);
  }

  select(selected: Troncal): void {
    this.selectedTroncal = selected;
  }

  delete(troncal: Troncal): void {
    if (confirm('Está seguro de inhabilitar la Troncal ' + troncal.letra_troncal)) {
      this.troncalService.delete(troncal).subscribe(() => {
          this.feedback = {type: 'success', message: 'La troncal ha sido deshabilitada'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error al deshabilitar'};
        }
      );
    }
  }
}
