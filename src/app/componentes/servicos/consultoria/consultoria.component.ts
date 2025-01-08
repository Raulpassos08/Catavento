import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BotaoComponent } from '../../contato/botao/botao.component';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, BotaoComponent],
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.scss'
})
export class ConsultoriaComponent {

}
