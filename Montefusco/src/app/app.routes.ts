import { ServiziComponent } from './categorie/servizi/servizi.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategorieComponent } from './categorie/categorie.component';
import { RistorantiComponent } from './categorie/ristoranti/ristoranti.component';
import { MonumentiComponent } from './categorie/monumenti/monumenti.component';
import { CantineComponent } from './categorie/cantine/cantine.component';
import { NegoziComponent } from './categorie/negozi/negozi.component';
import { AlloggiComponent } from './categorie/alloggi/alloggi.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'categorie', component: CategorieComponent },
    { path: 'ristoranti', component: RistorantiComponent },
    { path: 'servizi', component: ServiziComponent },
    { path: 'monumenti', component: MonumentiComponent },
    { path: 'cantine', component: CantineComponent },
    { path: 'negozi', component: NegoziComponent },
    { path: 'alloggi', component: AlloggiComponent },
];
