import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-navbar', // This is how the component will be used in templates
  standalone: true, // Allows this component to be used without being part of a module
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    SideNavbarComponent, // Sidebar navigation component
    RouterLink, // Enables router linking in the template
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLoggedIn: boolean = false; // Tracks user login state
  selected: string = ''; // Stores the selected category
  categories: string[] = []; // Stores available product categories

  constructor(
    private router: Router, // Router for navigation
    private authService: AuthServiceService, // Auth service for login/logout
    private productsService: ProductsService // Product service to fetch categories
  ) {}

  ngOnInit() {
    // Fetch categories when the component loads
    this.categories = this.productsService.getCategories();
  }

  onChange() {
    // Navigate to products page if a category is selected
    if (this.selected != 'None') {
      this.router.navigate(['/products'], { queryParams: { category: this.selected } });
    }
    console.log(this.selected); // Debugging: log selected category
  }

  onLogIn() {
    this.authService.login(); // Call the login method from AuthService
    alert('LoggedIn Successfully'); // Show a success message
    this.isLoggedIn = !this.isLoggedIn; // Toggle login state
  }

  onLogOut() {
    this.authService.logout(); // Call the logout method from AuthService
    alert('LoggedOut Successfully'); // Show a success message
    this.router.navigate(['/']); // Redirect to the home page
    this.isLoggedIn = !this.isLoggedIn; // Toggle login state
  }
}
