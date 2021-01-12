//definir animaciones
import  { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn',[
        transition(':enter',[ //cuando entre el componente 
            style({
                opacity: 0,
                //transform: 'translateY(-30%)',
                transform: 'rotate(150deg)'
            }),
            animate('500ms linear', style({
                opacity: 1,
                //transform: 'translateY(0%)',
                //transform: 'rotate(0deg)'
            }))
        ])
    ]);

    // Version larga
    /*  
    trigger('fadeIn',[
        state('*', style({ // ('*') cualquier estado
            opacity: 1
        })), 
        transition(':enter',[ //cuando entre el componente 
            style({
                opacity: 0,
                background: 'red'
            }),
            animate('500ms linear')
        ]),
        transition(':leave',[ //cuando abandonemos el componente y/o cambie de ruta
            animate('500ms linear', style({
                opacity: 0
            }))
        ])
    ]);
    */