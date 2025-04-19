import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from "./components/common/top-header/top-header.component";
import { NavbarComponent } from './components/common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopHeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotels_book';
}
