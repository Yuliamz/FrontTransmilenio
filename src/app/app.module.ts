import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';



import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TroncalModule } from './troncal/troncal.module';
import { EstacionModule } from './estacion/estacion.module';
import { TroncalEstacionModule } from './troncalEstacion/troncalEstacion.module';
import { TipoModule } from './tipo/tipo.module';
import { PortalModule } from './portal/portal.module';
import { PlataformaModule } from './plataforma/plataforma.module';
import { VagonModule } from './vagon/vagon.module';
import { RutaModule } from './ruta/ruta.module';
import { ParadaModule } from './parada/parada.module';
import { HorarioModule } from './horario/horario.module';
import { BusModule } from './bus/bus.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import {ViajeModule} from './viaje/viaje.module';
import { RandomModule } from './random/random.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    TroncalModule,
    EstacionModule,
    TroncalEstacionModule,
    TipoModule,
    PortalModule,
    PlataformaModule,
    VagonModule,
    RutaModule,
    ParadaModule,
    PortalModule,
    HorarioModule,
    BusModule,
    AsignacionModule,
    ViajeModule,
    RandomModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent
  ],
  exports: [ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
