import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorComponent } from './tarefas/gerenciador/gerenciador.component';

const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: GerenciadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

