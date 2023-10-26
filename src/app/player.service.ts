// src/app/player.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000/'; // API endpoint

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/players`);
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/players/${id}`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}/players`, player);
  }

  updatePlayer(id: string, player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiUrl}/players/${id}`, player);
  }

  deletePlayer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/players/${id}`);
  }

  // Implement custom query methods as needed
}
