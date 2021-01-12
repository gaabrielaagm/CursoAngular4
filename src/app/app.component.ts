import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Componente base principal";
  //LocalStorage (desde contacto.component.ts)
  emailContacto: string;

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