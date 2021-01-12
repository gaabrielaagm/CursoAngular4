import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

//Configuracion de rutas
const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        //definir rutas hijas -> /admin-panel/editar /admin-panel/crear
        children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },  //Cuando este vacía la ruta hija
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent }
        ]
    },
    //no dentro de las rutas hijas
    { path: 'listado-del-panel', component: ListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}