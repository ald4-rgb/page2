import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',

})
export class DirectivaComponent  {

//Creamos un atributo con el nombre listacurso
//Nota usar notacion camello
  listaPreguntas:string[ ] = ['¿Como me registro? En la pestaña Registro ', 
  '¿Si me registro que es lo puedo ver? solo  podras ver infromación de clientes como foto de perfil y detalles de la factura  ',
  '¿Quien registra a los clientes? El administrador se encarga de facturar a si como de su informacion personal de cada cliente',
  '¿Puedo ver el detalle de cada factura? Si como usario normal podras ver cada detalla de la factura del cliente ',
  '¿Puedo poner imagenes de perfil a los clientes ? No solo se pueden mostrar , pero  eso solo lo puede hacer el adminiatrador'];
  //La idea es iterar sobre este arreglo
 
  habilitar : boolean = true;


  constructor() { }

    //creamos una metodo 
    setHabilitar():void{

      this.habilitar = (this.habilitar== true)? false:true;
    }
 

}
