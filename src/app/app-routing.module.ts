import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
  {
    path:'', 
    component:InscriptionComponent
  },
  {
    path:'connexion', 
    component:ConnexionComponent
  },
  {
    path:'reset', 
    component: ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
