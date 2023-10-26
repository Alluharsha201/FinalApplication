import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../Player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {
  player: Player | undefined;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    // Retrieve player details based on the route parameter
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.playerService.getPlayer(id).subscribe((player) => {
        this.player = player;
      });
    }
  }
}
