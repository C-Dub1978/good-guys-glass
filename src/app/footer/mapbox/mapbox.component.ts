import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import 'node_modules/mapbox-gl/dist/mapbox-gl.css';

@Component({
  selector: 'footer-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements AfterViewInit, OnInit {
  map: mapboxgl.Map;
  @ViewChild('mapEl') mapElement: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.map = new mapboxgl.Map({
      center: [-90.386421, 29.964057],
      container: this.mapElement.nativeElement,
      interactive: false,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 14
    });

    const marker = new mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([-90.383421, 29.964057])
      .addTo(this.map);
  }

  ngOnInit() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidHJhbnNpZW50Y3ciLCJhIjoiY2pxY3ZyZDBrMWJqNTQydDd4ZW1hbnBl' +
      'biJ9.Vza9x9lhL1Dgim9c8sjPEg';
  }
}
