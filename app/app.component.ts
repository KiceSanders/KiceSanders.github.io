import { Component } from '@angular/core';
import { Bounce } from '../node_modules/bounce.min.js';

@Component({
    selector: 'my-app',
    template: '<h1>Kice Sanders</h1>'
})

export class AppComponent {
    bounce: new Bounce();
    bounce.translate({
        from: { x: 0, y: 0 },
        to: { x: 100, y: 0 }
    });
}
