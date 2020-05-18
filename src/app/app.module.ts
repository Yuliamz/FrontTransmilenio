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

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    TroncalModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
  ],
  exports: [ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
