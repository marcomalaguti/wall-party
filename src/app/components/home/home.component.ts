import { Component } from '@angular/core';
import { HeeroComponent } from "../shared/heero/heero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeeroComponent]
})
export class HomeComponent {

}
