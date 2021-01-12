import { Component } from '@angular/core';

@Component({
    selector: 'guardar-email',
    template: `
        <h2>{{title}}</h2>
        <h2>Ingresa un email para guardarlo en LocalStorage</h2>
        <input type="text" [(ngModel)] = "emailContacto">
        <button (click)="guardarEmail()">Guardar email (LocalStorage)</button>
    `
})
export class GuardarEmailComponent{
    title = 'Guardar email';
    emailContacto: string;

    //Guardar en LocalStorage
    guardarEmail(){
        //console.log(this.emailContacto);
        localStorage.setItem('emailContacto',this.emailContacto);
        //console.log(localStorage.getItem('emailContacto'));
    }
}