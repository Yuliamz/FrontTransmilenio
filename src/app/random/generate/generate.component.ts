import { Component } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random.generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent {

  options = [ 
    {
      name: 'Descargar',
      action: 'get'
    },
    {
      name: 'Registrar',
      action: 'save'
    },
    {
      name: 'Cargar',
      action: 'fill'
    }
  ];
  optionRandom = this.options[0];
  amount = 0;
  models = [ 
    {
      name: 'Troncales',
      value: 'trunk'
    },
    {
      name: 'Estaciones',
      value: 'station'
    },
    {
      name: 'Troncal_Estacion',
      value: 'trunkStation'
    },
    {
      name: 'Portales',
      value: 'portal'
    },
    {
      name: 'Plataformas',
      value: 'platform'
    },
    {
      name: 'Vagones',
      value: 'wagon'
    },
    {
      name: 'Rutas',
      value: 'route'
    },
    {
      name: 'paradas',
      value: 'stop'
    },
    {
      name: 'Tipos bus',
      value: 'bustype'
    },
    {
      name: 'Buses',
      value: 'bus'
    },
    {
      name: 'Horarios',
      value: 'schedule'
    },
    {
      name: 'Asignaciones',
      value: 'assignment'
    },
    {
      name: 'Viajes',
      value: 'travel'
    },
  ];
  model = this.models[0].value;
  file: File;
  feedback: any = {};
  constructor(private service: RandomService) { }

  actionBtn() {
    if (this.optionRandom.action == this.options[2].action) {
      if(!this.file){
        this.feedback = {type: 'warning', message: 'No ha seleccionado un archivo'};
        return;
      }
      this.service.send(this.model, this.optionRandom.action, this.file).subscribe(
          answer => {
            let message = '<p>Errores</p><ol>';
            for(let error in answer.errors)
              message +=  '<li>'+answer.errors[error]+'</li>';
            message = message.substring(0, message.length-1);
            message += '</ol>';
            this.feedback = {type: answer.errors ? 'warning': 'success', message: answer.message+message};
          },
          err => {
            let message = '';
            if(typeof err.error.errors === 'string')
              message = err.error.errors;
            else{
              for(let error in err.error.errors)
                message +=  err.error.errors[error]+',';
              message = message.substring(0, message.length-1);
            }
            this.feedback = {type: 'warning', message};
          }
      );
    } else if (this.amount > 0) {
      if (this.optionRandom.action == this.options[0].action) {
        let url = this.service.buildUrl(this.model, this.optionRandom.action, this.amount);
        let btn = document.createElement('a');
        btn.href = url;
        btn.click();
        document.removeChild(btn);
      } else
        this.service.action(this.model, this.optionRandom.action, this.amount).subscribe(
            answer => {
              let message = '<p>Errores</p><ol>';
              for(let error in answer.errors)
                message +=  '<li>'+answer.errors[error]+'</li>';
              message = message.substring(0, message.length-1);
              message += '</ol>';
              this.feedback = {type: answer.errors ? 'warning': 'success', message: answer.message+message};
            },
            err => {
              let message = '';
              if(typeof err.error.errors === 'string')
                message = err.error.errors;
              else{
                for(let error in err.error.errors)
                  message +=  err.error.errors[error]+',';
                message = message.substring(0, message.length-1);
              }
              this.feedback = {type: 'warning', message};
            }
        );
    
    }else
      this.feedback = {type: 'warning', message: 'La cantidad debe ser mayor a 0'};
  }

  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        if(fileList.length > 1){
          this.feedback = {type: 'warning', message: 'Solo puede cargar un archivo a la vez'};
          return;
        }
        this.file = fileList[0];
    } else 
      this.file = undefined;
  }
}
