import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LuminariaService } from './services/luminaria/luminaria.service';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { fileBarGraphFill, infoSquare } from 'ngx-bootstrap-icons';
const icons = {
  fileBarGraphFill,
  infoSquare
};
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    NgxBootstrapIconsModule.pick(icons),
    NgbModule,
    ComponentsModule
  ],
  providers: [
    LuminariaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
