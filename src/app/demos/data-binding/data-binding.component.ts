import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: '../data-binding/data-binding.component.html'
})
export class DataBindingComponent {

  /**
   * contadorClique 
   */
  public contadorClique : number = 0;

  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  public nome: string = '';


  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador() {
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }

}
