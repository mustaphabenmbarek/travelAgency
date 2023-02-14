import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './page/destination/destination.component';
import { SeachComponent } from './page/seach/seach.component';

const routes: Routes = [
  {
    path: '',
    component: SeachComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
