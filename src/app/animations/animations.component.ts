import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'animation',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid yellow'
            })),
            state('active', style({
                color: 'white',
                border: '5px solid green',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.1)' 
            })),
            transition('inactive => active', animate('1s linear')),
            transition('active => inactive', animate('1s linear'))
        ])
    ]
})
export class AnimationsComponent{
    titulo: string;
    status: string;

    constructor(){
        this.titulo = 'Animaciones en Angular';
        this.status = 'inactive';
    }

    cambiarEstado(status){
        if(status == 'inactive'){
            this.status = 'active';
        }else{
            this.status = 'inactive';
        }
    }
}