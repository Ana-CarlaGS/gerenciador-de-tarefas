import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { GerenciadorComponent } from './gerenciador/gerenciador.component';


@NgModule({
  declarations: [
    ListaTarefasComponent,
    GerenciadorComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
