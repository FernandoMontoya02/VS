import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TratamientosFacialesComponent } from './tratamientos-faciales/tratamientos-faciales.component';
import { BarberiaPeluqueriaComponent } from './barberia-peluqueria/barberia-peluqueria.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  // Redirige a '/services' por defecto
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'tratamientos-faciales', component: TratamientosFacialesComponent },
  { path: 'barberia-peluqueria', component: BarberiaPeluqueriaComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/services' },  // Ruta de captura en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
