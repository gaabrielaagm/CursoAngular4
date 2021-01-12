import { Component } from '@angular/core';

//Incluir jQuery
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'component-jquery',
    template: `
        <h3 *ngIf="hidden_title">[Hidden title]</h3>
        <h1 class="title" style="display: none;">{{title}}</h1>
        <br/>
        <button *ngIf="show_hide" (click)="toggleTitle()">Show title (with jQuery)</button>
        <button *ngIf="!show_hide" (click)="toggleTitle()">Hide title (with jQuery)</button>
        <br/>
        <br/>
    `
})
export class JqueryComponent{
    public title: string;
    public hidden_title: boolean;
    public show_hide: boolean;

    constructor(){
        this.title = 'Componente con Jquery';
        this.hidden_title = true;
        this.show_hide = true;
    }

    //Incluir jQuery en un método
    toggleTitle(){
        $('.title').slideToggle();
        this.show_hide = !this.show_hide;
        this.hidden_title = !this.hidden_title;
    }

}