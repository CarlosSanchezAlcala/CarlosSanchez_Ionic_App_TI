import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private toastController: ToastController) { }

  async ShowMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

}
