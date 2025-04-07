import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Hero } from '../../types/Hero';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent {

  // heroes variable stores the heroes array of Hero Objects
  heroes: Hero[] = [];

  constructor(private communicationService: CommunicationService){ // Communication Service Dependency Injecting
    this.heroes = this.communicationService.getHeroes(); // extracting heroes array of objects and storing in heroes variable
  }
}
