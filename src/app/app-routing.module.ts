// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerFormComponent } from './player-form/player-form.component';

const routes: Routes = [
  { path: 'players', component: PlayerListComponent },
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'add-player', component: PlayerFormComponent },
  { path: 'edit-player/:id', component: PlayerFormComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
