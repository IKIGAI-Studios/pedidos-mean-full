import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';
import Pedido from '../../models/pedido';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrl: './editar-pedido.component.css'
})
export class EditarPedidoComponent implements OnInit {

  //Propiedades:
  editarPedidoForm: FormGroup;
  enviado = false;
  pedidoTipoPago: any = [
    'Efectivo',
    'Tarjeta de crédito',
    'Tarjeta de débito',
    'Transferencia bancaria',
  ];
  pedidoData: Pedido[] = [];

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private pedidoService: PedidoService,
    private actRoute: ActivatedRoute
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    this.mainForm()
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmpleado(id);

    this.editarPedidoForm = this.FormBuilder.group({
      producto: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      nombre_cliente: ['', [Validators.required]],
      direccion_cliente: ['', [Validators.required]],
      tipo_pago: ['', [Validators.required]],
    });
  }

  //Método para generar el formulario:
  mainForm(){
    this.editarPedidoForm = this.FormBuilder.group({
      producto: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      nombre_cliente: ['', [Validators.required]],
      direccion_cliente: ['', [Validators.required]],
      tipo_pago: ['', [Validators.required]],
    });
  }

  //Método para asignar el pedido seleccionado por el usuario
  actualizarPedido(d){
    this.editarPedidoForm.get('tipo_pago').setValue(d,{
      onlySelf:true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.editarPedidoForm.controls;
  }

  //Método para buscar al empleado a modificar
  getEmpleado(id) {
    this.pedidoService.getPedido(id)
      .subscribe(data => {
        this.editarPedidoForm.setValue({
          producto: data['producto'],
          precio: data['precio'],
          fecha:  new Date(data['fecha']).toISOString().substring(0, 10),
          nombre_cliente: data['nombre_cliente'],
          direccion_cliente: data['direccion_cliente'],
          tipo_pago: data['tipo_pago'],
        });
      });
  }

  //Método para enviar el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.editarPedidoForm.valid) return false;
    
    if (window.confirm('¿Estás seguro de que quieres modificar este pedido?')) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      this.pedidoService.actualizarPedido(id, this.editarPedidoForm.value)
      .subscribe({
        complete: () => {
          this.router.navigate(['/listar-pedidos']);
          console.log('Pedido modificado correctamente');
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
