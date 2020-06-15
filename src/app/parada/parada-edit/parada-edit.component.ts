import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ParadaService } from '../parada.service';
import { Parada } from '../parada';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Ruta} from '../../ruta/ruta';
import {RutaService} from '../../ruta/ruta.service';
import {Vagon} from '../../vagon/vagon';
import {VagonService} from '../../vagon/vagon.service';
import {VagonDTO} from '../vagonDTO';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-parada-edit',
  templateUrl: './parada-edit.component.html',
  styleUrls: ['./parada-edit.component.css']
})
export class ParadaEditComponent implements OnInit {

  id: string;
  parada: Parada;
  feedback: any = {};
  estados: any[] = [{id: 'a', nombre: 'Activo'}, {id: 'n', nombre: 'Inactivo'}];
  rutas: Ruta[];
  vagones: Vagon[];
  selectedVagones: Vagon[] = new Array<Vagon>();
  selectedRuta: Ruta;
  selectedEstacion: Vagon;
  private ruta: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rutaService: RutaService,
    private vagonService: VagonService,
    private paradaService: ParadaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Parada()); }
          this.ruta = id;
          return this.paradaService.findById(id);
        })
      )
      .subscribe(parada => {
          this.parada = new Parada();
          this.parada.id_ruta = Number(this.ruta);
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'danger', message: 'Error al cargar la información'};
        }
      );
        // Cargar Rutas
      this.rutaService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Rutas'};
        } else {
          this.rutas = data;
          this.setRuta();
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Rutas'};
      });
      // Cargar Vagones
      this.vagonService.cargar().subscribe(data => {
        if (data.length === 0) {
          this.feedback = {type: 'warning', message: 'No existen Vagones'};
        } else {
          this.vagones = data.map(value => {
            value.draggable = true;
            return value;
          });
        }
      }, error => {
        this.feedback = {type: 'danger', message: 'No existen Vagones'};
      });
  }
  descargar() {
    saveAs('http://localhost:8000/api/download/stop', 'Paradas.json');
  }
  save() {
    if (!this.parada.id_ruta) {
      console.log('No tiene id_ruta por lo tanto va a guardar');
      if (this.selectedRuta) {
        this.parada.id_ruta = this.selectedRuta.id_ruta;
      }
      if (this.selectedVagones.length > 0) {
        this.parada.wagons = this.listVagonToVagonDTO(this.selectedVagones);
      }
      this.paradaService.save(this.parada).subscribe(
        parada => {
          this.parada = new Parada();
          this.feedback = {type: 'success', message: 'Guardado correctamente '};
          setTimeout(() => {
            this.clean();
            this.redirectTo('/paradas/new');
          }, 1000);
        },
        error => {
          if (error.error.errors) {
            this.feedback = {type: 'danger', message: error.error.errors};
          } else {
            this.feedback = {type: 'danger', message: 'Error al guardar'};
          }
        }
      );
    } else {
      console.log('tiene id_ruta por lo tanto va a actualizar');
      if (this.selectedVagones.length > 0) {
        this.parada.wagons = this.listVagonToVagonDTO(this.selectedVagones);
      }
      this.paradaService.update(this.parada).subscribe(
        parada => {
          this.parada = new Parada();
          this.feedback = {type: 'success', message: 'Actualizado correctamente'};
          setTimeout(() => {
            this.clean();
            this.redirectTo('/paradas/new');
          }, 1000);
        },
        error => {
          if (error.error.errors) {
            this.feedback = {type: 'danger', message: error.error.errors};
          } else {
            this.feedback = {type: 'danger', message: 'Error al guardar'};
          }
        }
      );
    }

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

  clean() {
    this.parada.id_ruta = null;
    this.parada.wagons = null;
    this.selectedVagones = null;
    this.ruta = null;
    this.selectedRuta = null;
  }
  cancel() {
    this.clean();
    this.redirectTo('/paradas/new');
  }

  drop(event: CdkDragDrop<Vagon[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer.data[event.previousIndex]);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data[event.previousIndex]);
      if (event.previousContainer.data[event.previousIndex].draggable) {
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      } else {
        event.previousContainer.data[event.previousIndex].activo_vagon = 'n';
      }
    }
  }
  setRuta() {
    this.rutas.forEach(ruta => {
      // tslint:disable-next-line:triple-equals
      if (ruta.id_ruta == this.parada.id_ruta) {
        this.selectedRuta = ruta;
        this.cargarSelectedVagones(this.selectedRuta.id_ruta);
      }
    });
  }



  setRutaById (id: number) {
    this.rutas.forEach(ruta => {
      // tslint:disable-next-line:triple-equals
      if (ruta.id_ruta == id) {
        this.selectedRuta = ruta;
      }
    });
  }

  vagonToVagonDTO(vagon: Vagon) {
    const vagonDTO = new VagonDTO();
    vagonDTO.id_vagon = vagon.id_vagon;
    vagonDTO.estado_parada = vagon.activo_vagon;
    return vagonDTO;
  }

  vagonDTOtoVagon(dto: VagonDTO) {
    let vagon = new Vagon();
    this.vagonService.findById(String(dto.id_vagon)).subscribe(value => {
      vagon = value;
      return vagon;
    }  , error => {
      console.error(error);
      return null;
    });
  }

  listVagonToVagonDTO(list: Vagon[]) {
    const vagones = new Array<VagonDTO>();
    for (let i = 0; i < list.length; i++) {
      const vagonDTO = new VagonDTO();
      vagonDTO.estado_parada = list[i].activo_vagon;
      vagonDTO.id_vagon = list[i].id_vagon;
      vagones.push(vagonDTO);
    }
    return vagones;
  }

  ListvagonDTOtoVagon(dtos: any[]) {
    const vagones = new Array<Vagon>();
    for (let i = 0; i < dtos.length; i++) {
      this.vagonService.findById(String(dtos[i].id_vagon)).subscribe(value => vagones.push(value)
        , error => {
        console.error(error);
      });
    }
    return vagones;
  }
  cargarSelectedVagones(id_ruta: number) {
    this.selectedVagones = new Array<Vagon>();
    this.paradaService.findById(String(id_ruta)).subscribe(value => {
      if (value && value.length > 0) {
        this.parada.id_ruta = value[0].pivot.id_ruta;
        for (let i = 0; i < value.length; i++) {
          const vagon = new Vagon();
          console.log(value[i]);
          vagon.id_vagon = value[i].id_vagon;
          vagon.id_plataforma = value[i].id_plataforma;
          vagon.id_troncal_estacion = value[i].id_troncal_estacion;
          vagon.numero_vagon = value[i].numero_vagon;
          vagon.activo_vagon = value[i].pivot.estado_parada;
          vagon['platform'] = value[i].platform;
          vagon['trunk_station'] = value[i].trunk_station;
          vagon.draggable = false;
          this.selectedVagones.push(vagon);

        }
      } else {
        this.parada.id_ruta = null;
      }
    }, error => console.error(error));
  }

  habilitar(item: Vagon) {
    item.activo_vagon = 'a';
  }



}
