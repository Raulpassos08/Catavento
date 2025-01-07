import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { BotaoComponent } from '../../contato/botao/botao.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-licenca',
  standalone: true,
  imports: [HeaderComponent, BotaoComponent, NgOptimizedImage],
  templateUrl: './licenca.component.html',
  styleUrl: './licenca.component.scss'
})
export class LicencaComponent {

}
