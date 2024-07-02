import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoPedidoComponent } from './pages/nuevo-pedido/nuevo-pedido.component';
import { EditarPedidoComponent } from './pages/editar-pedido/editar-pedido.component';
import { ListarPedidoComponent } from './pages/listar-pedido/listar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPedidoComponent,
    EditarPedidoComponent,
    ListarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
