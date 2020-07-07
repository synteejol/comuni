import { Injectable } from '@angular/core';
import {Sezioni} from '../model/sezioni';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from '../model/video';
// const ApiUrl = 'http://localhost/db_conn.php';
const ApiUrl = 'https://secret-escarpment-08158.herokuapp.com/db_conn.php';
// const ApiVideoUrl = 'http://localhost/video.php?idsez=';
const ApiVideoUrl = 'https://secret-escarpment-08158.herokuapp.com/video.php?idsez=';
@Injectable({
  providedIn: 'root'
})
export class SezServService {
  // METODO GET RICEZIONE DATI
  getAll(): Observable <Sezioni[]> {
    return this.http.get<Sezioni[]>(ApiUrl);
  }
  detailSection(id): Observable <Sezioni>{
    return  this.http.get<Sezioni>(`${ApiVideoUrl}${id}`);
  }
  getVideoById(id): Observable<Video[]>{
    return this.http.get<Video[]>(`${ApiVideoUrl}${id}`);
  }
  constructor(private http: HttpClient) { }
}
