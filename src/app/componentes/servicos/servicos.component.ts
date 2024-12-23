import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GestaoComponent } from "./gestao/gestao.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgOptimizedImage, GestaoComponent, RouterLink],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

}
