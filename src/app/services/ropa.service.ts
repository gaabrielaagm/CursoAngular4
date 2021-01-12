// Decorador inyectable para poder inyectar nuestra clase mediante la inyeccion 
//de dependencia en los componentes y en diferentes sitios
import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
    public nombre_prenda = "pantalones vaqueros";
    public coleccion_ropa = ["Pantalon", "Camiseta"];

    prueba(nombre_prenda){
        return nombre_prenda;
    }

    //fuerzo que lo que tiene que recibir es de tipo string y que lo que devolverá será un array de tipo string
    addRopa(nombre_prenda:string):Array<string>{ 
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.coleccion_ropa;
    }   
}
