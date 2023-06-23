import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  kp:any;
  nopa:any;
  nama:any;
  jumlah:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit(): void {
  }
  async addPesan() {
    let url = this._apiService.apiURL() + "/order";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        kp: this.kp,
        nopa: this.nopa,
        nama: this.nama,
        jumlah: this.jumlah
      },
    }).then((data) => {
      this.kp = '';
      this.nopa = '';
      this.nama = '';
      this.jumlah = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Pesanan',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.kp ='';
      this.nopa ='';
      this.nama ='';
      this.jumlah='';
    }, (error) => {
     this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Pesanan',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
