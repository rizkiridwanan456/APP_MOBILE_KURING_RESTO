import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  nobo:any;
  nama:any;
  no:any;
  orang:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit(): void {
  }
  async addBooking() {
    let url = this._apiService.apiURL() + "/book";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nobo: this.nobo,
        nama: this.nama,
        no: this.no,
        orang: this.orang
      },
    }).then((data) => {
      this.nobo = '';
      this.nama = '';
      this.no= '';
      this.orang = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Booking',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.nobo ='';
      this.nama ='';
      this.no ='';
      this.orang ='';
    }, (error) => {
     this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Booking',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
