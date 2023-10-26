// src/app/player-form/player-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../Player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
  player: Player = new Player(); // Initialize an empty player object
  isEdit = false; // Flag to determine if it's an edit or add operation

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // If an ID is provided in the route, it's an edit operation
      this.isEdit = true;
      this.playerService.getPlayer(id).subscribe((player) => {
        this.player = { ...player }; // Create a copy to prevent two-way binding
      });
    }
  }

  savePlayer(): void {
    if (this.isEdit) {
      // If it's an edit operation, update the player
      this.playerService.updatePlayer(this.player.id, this.player).subscribe(() => {
        this.router.navigate(['/players']);
      });
    } else {
      // If it's an add operation, create a new player
      this.playerService.addPlayer(this.player).subscribe(() => {
        this.router.navigate(['/players']);
      });
    }
  }
}
