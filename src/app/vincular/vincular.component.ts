import { Component } from '@angular/core';

@Component({
  selector: 'app-vincular',
  standalone: true,
  imports: [],
  templateUrl: './vincular.component.html',
  styleUrl: './vincular.component.css'
})
export class VincularComponent {
  mensaje = "Este es el mensaje original";

  cambiarMensaje(){
    this.mensaje = "Mensaje nuevo respondiendo al Click"
  }
}
