import { Component, TemplateRef,ViewChild, ViewEncapsulation } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer, marker } from 'leaflet';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LuminariaService } from './services/luminaria/luminaria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent
{

 @ViewChild('content') content: any;
  public map:Map;
  private maker: any;

  public mapOptions:MapOptions = {
    zoom: 30,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer;

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor(private offcanvasService: NgbOffcanvas, private luminariaService: LuminariaService)
  {

    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 20,
      maxZoom: 35,
      minZoom: 1
    });

  }

  public onMapReady(map:Map):void
  {
    this.map = map;
    this.map.setView([37.588869375912275, -4.080019040101075], 15);

    this.addLuminairesLayer();
  }

  public setView(latLng: LatLng) {
    this.map.setView([latLng.lat, latLng.lng]);
  }

  public flyTo(latLng: LatLng, zoom : number = 15) {
    this.map.flyTo([latLng.lat, latLng.lng], zoom);
  }

  private async addLuminairesLayer():Promise<void>
  {
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    this.luminariaService.setLuminarias(luminaires);
    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) =>
      circleMarker(latLng).on('click', e => {
         this.luminariaService.setData(feature);
         this.flyTo(latLng, 20);
         if (this.map) {
          if (this.maker) {
            this.maker.remove();
          }
          this.maker = marker(latLng).addTo(this.map);

        }
        this.openDetails();
        }),
      style: feature =>  ({
        radius: 8,
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      })
    };

    geoJSON(luminaires, options).addTo(this.map);
  }


  openDetails() {
    this.offcanvasService.open(this.content, { position: 'end'});
  }

}
