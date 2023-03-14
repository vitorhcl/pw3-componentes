import { Component } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {
  nome: string = "Luke Skywalker";
  templo: string = "Coruscant";
}
