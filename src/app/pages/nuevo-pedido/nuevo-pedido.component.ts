import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})

export class NuevoPedidoComponent implements OnInit {

  //Propiedades:
  pedidoForm: FormGroup;
  enviado = false;
  pedidoTipoPago: any = [
    'Efectivo',
    'Tarjeta de crédito',
    'Tarjeta de débito',
    'Transferencia bancaria',
  ];

  constructor(
    public FormBuilder: FormBuilder,
    private router: Router,
    private NgZone: NgZone,
    private pedidoService: PedidoService
  ){
    this.mainForm();
  }

  ngOnInit(): void {
    
  }

  //Método para generar el formulario:
  mainForm(){
    this.pedidoForm = this.FormBuilder.group({
      producto: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      nombre_cliente: ['', [Validators.required]],
      direccion_cliente: ['', [Validators.required]],
      tipo_pago: ['', [Validators.required]],
    });
  }

  //Método para asignar el tipo de pago seleccionado por el usuario
  actualizarPedido(d){
    this.pedidoForm.get('tipo_pago').setValue(d,{
      onlySelf:true
    });
  }

  //Getter para acceder a los controles del formulario
  get myForm(){
    return this.pedidoForm.controls;
  }

  //Método para enviar el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.pedidoForm.valid) return false;
    return this.pedidoService.nuevoPedido(this.pedidoForm.value)
    .subscribe({
      complete: ()=>{
        console.log('Pedido agregado correctamente')
        this.NgZone.run(()=> this.router.navigateByUrl('/listar-pedidos'))
      },
      error: (error) => {
        console.log(error);
      }
    })  
  }
}

