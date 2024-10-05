export interface Rider {
    name: string;
    age: number;
    screamLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME'; // Restrict scream level to these options
  }
  
  export interface RideResponse {
    riders: Rider[]; // List of Rider objects
  }