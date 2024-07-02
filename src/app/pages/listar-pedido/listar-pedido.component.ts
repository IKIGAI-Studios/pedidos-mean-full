import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrl: './listar-pedido.component.css'
})

export class ListarPedidoComponent implements OnInit{

  pedidos: any = []

  constructor(private pedidoService: PedidoService) {
    this.getPedidos()
  }

  ngOnInit(): void {
    
  }

  getPedidos(){
    this.pedidoService.getPedidos()
      .subscribe(data => {
        this.pedidos = data
      })
  }

  // Eliminar un pedido
  eliminarPedido(empleado, idx) {
    if(window.confirm('¿Estas seguro de eliminar el pedido?')) {
      this.pedidoService.eliminarPedido(empleado._id)
        .subscribe(data => {
          this.pedidos.splice(idx, 1)
        })
    }
  }
}

