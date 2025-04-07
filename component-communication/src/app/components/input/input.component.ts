import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  // It stores the all hero names comes from the communication service
  heroNames: string[] = [];
  
  constructor(private communicationService: CommunicationService){ // Dependency Injection of CommunicationService
    this.heroNames = this.communicationService.getHeroNames(); //retrieving an storing heroes names
  }
}
