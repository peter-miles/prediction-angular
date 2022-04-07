import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'https://6243d34339aae3e3b7475f7a.mockapi.io/player';
  
  constructor(private http: HttpClient) { }

  GetAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }
}
