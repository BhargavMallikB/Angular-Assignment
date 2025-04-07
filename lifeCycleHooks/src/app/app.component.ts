import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  counter: number = 0;
  inputValue: string = '';

  // Constructor - Not a lifecycle hook, but initialization point
  constructor() {
    console.log('1. Constructor called');
  }

  // Called when input properties change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called', changes);
  }

  // Called once after component initialization
  ngOnInit(): void {
    console.log('3. ngOnInit called');
  }

  // Called during every change detection cycle
  ngDoCheck(): void {
    console.log('4. ngDoCheck called');
  }

  // Called after content projection
  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit called');
  }

  // Called after content is checked
  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked called');
  }

  // Called after view initialization
  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called');
  }

  // Called after view is checked
  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked called');
  }

  // Called before component destruction
  ngOnDestroy(): void {
    console.log('9. ngOnDestroy called');
  }

  // Custom methods
  increment(): void {
    this.counter++;
  }

  onInputChange(value: string): void {
    console.log('Input changed to:', value);
  }
}
