import { Component } from '@angular/core';
import { fadeIn } from '../animations-components/animations';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
    animations: [fadeIn]
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
}