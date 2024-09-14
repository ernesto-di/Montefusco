import { Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-ristoranti',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './ristoranti.component.html',
  styleUrl: './ristoranti.component.css'
})
export class RistorantiComponent{

    cards = [
      { title: 'Card 1', description: 'Descrizione della Card 1', imageUrl: 'assets/logo.jpg' },
      { title: 'Card 2', description: 'Descrizione della Card 2', imageUrl: 'assets/logo.jpg' },
      { title: 'Card 3', description: 'Descrizione della Card 3', imageUrl: 'assets/logo.jpg' },
      // Aggiungi altre cards
    ];
    constructor(private router: Router) {}
    currentIndex = 0;

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  
    next() {
      if (this.currentIndex < this.cards.length - 1) {
        this.currentIndex++;
      }
    }

    return(){
      this.router.navigate(['/categorie']);
    }
  }
  

