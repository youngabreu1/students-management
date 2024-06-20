import { Component } from '@angular/core';
import { CaroulselComponent } from '../caroulsel/caroulsel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CaroulselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
