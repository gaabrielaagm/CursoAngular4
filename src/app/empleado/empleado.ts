//ESTO ES COMO UN MODELO EN UNA CLASE
export class Empleado{
    /*
    public nombre: string;
    public edad: number;

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    */

    // Ya no se hace de la forma de arriba
    // Ahora se hace de la siguiente manera:
    // Las variables se declaran en el constructor
    constructor(
        public nombre:string, 
        public edad: number,
        public cargo: string,
        public contratado: boolean
    ){}
}