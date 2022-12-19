import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.page.html',
  styleUrls: ['./prelogin.page.scss'],
})
export class PreloginPage implements OnInit {

  constructor(private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  goToLogin() {
      this.router.navigate(['/login'])
  }

}
