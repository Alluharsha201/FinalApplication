export class Player {
    id: string; // Unique identifier for the player
    name: string; // Player's name
    age: number; // Player's age
    team: string; // Team name
    position: string; // Player's position (e.g., forward, midfielder)
  
    constructor() {
      this.id = ''; // Initialize to an empty string
      this.name = '';
      this.age = 0;
      this.team = '';
      this.position = '';
    }
  }
  