import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomRoutingModule } from './random-routing.module';
import { GenerateComponent } from './generate/generate.component';
import { RandomService } from './random.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GenerateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RandomRoutingModule
  ],
  providers: [RandomService],
})
export class RandomModule { }
