import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
}
