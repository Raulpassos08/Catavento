import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BotaoComponent } from '../../contato/botao/botao.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-outorga',
  standalone: true,
  imports: [HeaderComponent, BotaoComponent, NgOptimizedImage],
  templateUrl: './outorga.component.html',
  styleUrl: './outorga.component.scss'
})
export class OutorgaComponent {

}
