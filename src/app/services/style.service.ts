import { Inject, Injectable } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(@Inject(DOCUMENT) private document: Document, private location: Location) { }

  ManageStyles() {
    this.ChangeLayout();
    this.ChangeNavBarBackgroundColor();
    this.SetPaddingTopOnMainContainer();
  }

  ChangeLayout() {
    let navBar = this.document.querySelector('.navbar') as HTMLElement;
    let contatti = this.document.querySelector('#contatti') as HTMLElement;
    if (this.location.path() == "") {
      navBar.classList.add('d-none');
      contatti.classList.add('d-none');
    } else {
      navBar.classList.remove('d-none');
      contatti.classList.remove('d-none');
    }
  }

  private ChangeNavBarBackgroundColor() {
    let element = this.document.querySelector('.navbar') as HTMLElement;
    if (this.location.path() == "") {
      element.classList.remove('bg-black');
    } else {
      element.classList.add('bg-black');
    }
  }

  private SetPaddingTopOnMainContainer() {
    let element = this.document.querySelector('#mainContainer') as HTMLElement;
    if (this.location.path() == "") {
      element.classList.remove('pt-5');
    } else {
      element.classList.add('pt-5');
    }
  }
}
