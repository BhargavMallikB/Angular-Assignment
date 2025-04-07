import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  // quotes receive the data and stores coming from Child Component called Child
  quotes: string[] =[];
}
