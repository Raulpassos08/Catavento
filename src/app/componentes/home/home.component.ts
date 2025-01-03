import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { SobreComponent } from "../sobre/sobre.component";
import { ServicosComponent } from '../servicos/servicos.component';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, SobreComponent, ServicosComponent, ContatoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
