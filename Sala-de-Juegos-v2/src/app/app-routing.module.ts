import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent }
  // { path: '', component: PrincipalComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Mapa', component: MapaDeGoogleComponent },
  // { path: 'QuienSoy', component: QuienSoyComponent },
  // { path: 'Registro', component: RegistroComponent },
  // { path: 'Principal', component: PrincipalComponent },
  // { path: 'Listado', component: ListadoComponent },
  // { path: 'Paises', component: ListadoDePaisesComponent },

  // {
  //   path: 'Juegos',
  //   component: JuegosComponent,
  //   children:
  //     [{ path: '', component: MenuCardComponent },
  //     { path: 'Adivina', component: AdivinaElNumeroComponent },
  //     { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
  //     { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
  //     { path: 'Agilidad', component: AgilidadAritmeticaComponent },
  //     { path: 'Memokey', component: MemorizaLasTeclasComponent }]
  // },
  // { path: '**', component: ErrorComponent },
  // { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
