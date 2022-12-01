import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteSavePageRoutingModule } from './cliente-save-routing.module';

import { ClienteSavePage } from './cliente-save.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClienteSavePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ClienteSavePage]
})
export class ClienteSavePageModule {}
