import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleService } from './services/style.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ContattiComponent, ChiSiamoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {  
  constructor(private service: StyleService) {}
  
  title = 'WallParty';

  onActivate() {
    this.service.ManageStyles();
  }
}
