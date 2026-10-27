import { Component } from '@angular/core';
import { big } from './big';
@Component({ selector: 'app-root', standalone: true, template: '<h1>Hello my-app</h1><p>{{ size }}</p>' })
export class AppComponent { size = big.length; }
