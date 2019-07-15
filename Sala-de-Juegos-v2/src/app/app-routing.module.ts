import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { MemorizaLasTeclasComponent } from './componentes/memoriza-las-teclas/memoriza-las-teclas.component';
import { ListaPuntuacionComponent } from './componentes/lista-puntuaciones/lista-puntuaciones.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './componentes/ta-te-ti/ta-te-ti.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'logearse', component: LoginComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  { path: 'registrarse', component: RegistroComponent },
  { path: 'jugadores', component: ListaUsuariosComponent },
  { path: 'resultados', component: ListaPuntuacionComponent },
  {
    path: 'juegos', children: [
      { path: '', component: MenuCardComponent },
      { path: 'adivina', component: AdivinaElNumeroComponent },
      { path: 'agilidad', component: AgilidadAritmeticaComponent },
      { path: 'ppt', component: PiedraPapelTijeraComponent },
      { path: 'tateti', component: TaTeTiComponent },
      { path: 'memokey', component: MemorizaLasTeclasComponent }
    ]
  }
  // { path: '**', component: ErrorComponent },
  // { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
