import { Component, OnInit } from '@angular/core';
import { VagonFilter } from '../vagon-filter';
import { VagonService } from '../vagon.service';
import { Vagon } from '../vagon';

@Component({
  selector: 'app-vagon',
  templateUrl: 'Vagon-list.component.html'
})
export class VagonListComponent implements OnInit {

  filter = new VagonFilter();
  selectedVagon: Vagon;
  feedback: any = {};

  get vagonList(): Vagon[] {
    return this.vagonService.vagonList;
  }

  constructor(private vagonService: VagonService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.vagonService.load(this.filter);
  }

  select(selected: Vagon): void {
    this.selectedVagon = selected;
  }

  delete(vagon: Vagon): void {
    if (confirm('Está seguro de inhabilitar el Vagon ' + vagon.numero_vagon)) {
      this.vagonService.delete(vagon).subscribe(() => {
          this.feedback = {type: 'success', message: 'El Vagon ha sido deshabilitada'};
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
