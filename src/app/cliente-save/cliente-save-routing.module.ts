import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteSavePage } from './cliente-save.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteSavePageRoutingModule {}
