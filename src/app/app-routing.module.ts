import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPedidoComponent } from './pages/nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './pages/editar-pedido/editar-pedido.component';
import { ListarPedidoComponent } from './pages/listar-pedido/listar-pedido.component';

const routes: Routes = [
  {path: '', redirectTo: 'nuevo-pedido', pathMatch: 'full'},
  {path: 'nuevo-pedido', component: NuevoPedidoComponent},
  {path: 'listar-pedidos', component: ListarPedidoComponent},  
  {path: 'editar-pedido/:id', component: EditarPedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
