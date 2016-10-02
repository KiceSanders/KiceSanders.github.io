import { Component } from '@angular/core';
import { Bounce } from 

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
    bounce: new Bounce();
    bounce.translate({
        from: { x: 0, y: 0 },
        to: { x: 100, y: 0 }
    });
}
