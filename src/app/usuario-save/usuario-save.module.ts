import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioSavePageRoutingModule } from './usuario-save-routing.module';

import { UsuarioSavePage } from './usuario-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioSavePageRoutingModule
  ],
  declarations: [UsuarioSavePage]
})
export class UsuarioSavePageModule {}
