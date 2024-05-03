import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    const config: HTMLElement | null  = document.querySelector('.arrumarConfig')
    const openConfig = document.querySelector('.config')

    if(config){
      config.addEventListener('click', AbrirConfig)
    }
    function AbrirConfig(){
      if(config && openConfig){
        openConfig.classList.toggle('ativo')
      }
    }
  }
}
