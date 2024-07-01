import { Component } from '@angular/core';
import { HeeroComponent } from "../shared/heero/heero.component";

@Component({
    selector: 'app-coming-soon',
    standalone: true,
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.css',
    imports: [HeeroComponent]
})
export class ComingSoonComponent {

}
