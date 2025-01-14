import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MatIconModule, GoogleMapsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  // center: google.maps.LatLngLiteral = { lat: -23.55052, lng: -46.633308 }; 
  // zoom = 13;
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -3.8721051, lng: -38.613637},
    zoom: 16,
  };

  markerPosition: google.maps.LatLngLiteral = { lat: -3.8721051, lng: -38.613637}
}
