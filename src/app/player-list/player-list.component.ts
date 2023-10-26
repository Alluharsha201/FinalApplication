// src/app/player-list/player-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => {
      this.players = players;
    });
  }

  // Add the deletePlayer method
  deletePlayer(id: string): void {
    this.playerService.deletePlayer(id).subscribe(() => {
      // Remove the deleted player from the array
      this.players = this.players.filter((player) => player.id !== id);
    });
  }
}
