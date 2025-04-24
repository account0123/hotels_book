import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
