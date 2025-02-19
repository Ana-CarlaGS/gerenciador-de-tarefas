import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.component.html',
  styleUrls: ['./gerenciador.component.css']
})
export class GerenciadorComponent {
  titulo = 'Gerenciador de Tarefas';
  novaTarefa = ''; // Captura do input via [(ngModel)]
  tarefas: { nome: string; concluida: boolean }[] = [];

  // Adiciona nova tarefa
  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa, concluida: false });
      this.novaTarefa = ''; // Limpa o input
    }
  }

  // Marca uma tarefa como concluída
  concluirTarefa(index: number) {
    this.tarefas[index].concluida = true;
  }

  // Alternar visibilidade da lista
  mostrarLista = true;
  alternarLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
