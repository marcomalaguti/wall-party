import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavItemDto } from '../../../models/nav-item.dto';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-item.component.html',
  styleUrl: '../nav-bar.component.css'
})
export class NavItemComponent {

  @Input()
  navItem!: NavItemDto;

}
