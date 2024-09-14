import { Router, Routes } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private router: Router) { }

  goTo(){
    this.router.navigate(['/categorie'])
  }

}
