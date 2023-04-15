import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  nama: string = 'Meldodi Samuel Sianturi';
  nim: string = '42030045';
  innama:string = '';
  innim:string = '';
  inprod:string = '';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onRata() {
    this.nama = this.nama
    this.nim = this.nim
  }
}
