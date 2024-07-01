import { Component, HostListener, OnInit } from '@angular/core';
import { NavItemComponent } from "./nav-item/nav-item.component";
import { NavDropdownItemComponent } from "./nav-dropdown-item/nav-dropdown-item.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [NavItemComponent, NavDropdownItemComponent]
})
export class NavBarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.location.path() == "") {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > window.outerHeight - element.clientHeight) {
        element.classList.add('bg-black');
      } else {
        element.classList.remove('bg-black');
      }
    }
  }
}
