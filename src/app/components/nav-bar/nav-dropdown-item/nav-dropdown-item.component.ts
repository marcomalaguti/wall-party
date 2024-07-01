import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavItemDto } from '../../../models/nav-item.dto';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-dropdown-item',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-dropdown-item.component.html',
  styleUrl: '../nav-bar.component.css'
})
export class NavDropdownItemComponent {

  @Input()
  text!: string;

  @Input()
  items!: NavItemDto[];

}
