import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.component.html',
  styleUrls: ['./gerenciador.component.css']
})
export class GerenciadorComponent {
  titulo = 'Gerenciador de Tarefas';
  novaTarefa = ''; 
  tarefas: { nome: string; concluida: boolean }[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = ''; 
    }
  }

  concluirTarefa(index: number) {
    this.tarefas[index].concluida = true;
  }

  mostrarLista = true;
  alternarLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
