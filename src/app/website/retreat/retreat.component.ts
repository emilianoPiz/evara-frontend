import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-retreat',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './retreat.component.html',
  styleUrl: './retreat.component.scss',
})
export class RetreatComponent {}
