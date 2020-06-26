import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sezioni} from '../../model/sezioni';
import {SezServService} from '../../service/sez-serv.service';

const ApiUrl = 'http://localhost/db_conn.php';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sez: Sezioni[];
  constructor(private http: HttpClient, private sezService: SezServService) { }

  getAll(){
    this.sezService.getAll()
      .subscribe((res: Sezioni[]) => {
        this.sez = res;
      });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
