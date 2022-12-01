import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioSavePage } from './usuario-save.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioSavePageRoutingModule {}
