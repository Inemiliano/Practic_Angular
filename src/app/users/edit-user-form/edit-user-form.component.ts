import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'] 
})
export class EditUserFormComponent {
  @Input() user: IUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };

  @Input() disabled: boolean = true; 

  @Output() eventEmitter = new EventEmitter<IUser>(); 

  nuevoUsuario: IUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  };

  usuarios: IUser[] = [];

  constructor() {}

  agregarUsuario(): void {
    if (this.nuevoUsuario.name && this.nuevoUsuario.username && this.nuevoUsuario.email) {
      this.usuarios.push({ ...this.nuevoUsuario });
      console.log('Usuario agregado:', this.nuevoUsuario);
      
      this.eventEmitter.emit(this.nuevoUsuario);

      
      this.nuevoUsuario = {
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
      };
      
      
    } else {
      console.error('Formulario incompleto');
    }
  }
}
