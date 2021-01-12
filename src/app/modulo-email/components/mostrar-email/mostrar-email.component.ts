import { Component } from '@angular/core';

@Component({
    selector: 'mostrar-email',
    template: `
        <div *ngIf="emailContacto" style="display: inline;">
            <h2>{{title}}</h2>
            <span>Email Contacto: {{emailContacto}}</span>
            <button (click)="borrarEmail()">Eliminar email</button>
        </div>
    `
})
export class MostrarEmailComponent{
    public title = 'Mostrar email';
    public emailContacto: string;

    ngOnInit(){
        this.emailContacto = localStorage.getItem('emailContacto');
        console.log(this.emailContacto);
        //console.log(localStorage.getItem('emailContacto'));
      }
    
      ngDoCheck() {
        this.emailContacto = localStorage.getItem('emailContacto');
      }
    
      borrarEmail(){
        //Vaciar un solo Item de localStorage
        localStorage.removeItem('emailContacto');
        //Vaciar todo los Items de localStorage
        //localStorage.clear();
        this.emailContacto = null;
      }
}