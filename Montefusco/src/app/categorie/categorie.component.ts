import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css',
})
export class CategorieComponent {
  constructor(private router: Router) {}

  ristoranti() {
    this.router.navigate(['/ristoranti']);
  }

  servizi() {
    this.router.navigate(['/servizi']);
  }

  monumenti() {
    this.router.navigate(['/monumenti']);
  }
  cantine() {
    this.router.navigate(['/cantine']);
  }
  negozi() {
    this.router.navigate(['/negozi']);
  }
  alloggi() {
    this.router.navigate(['/alloggi']);
  }
}
