import { Component } from '@angular/core';

@Component({
    selector: 'app-page-404',
    template: `
        <div class='center'>
            <img src=""/>
            <h1>Hey, cette page n'existe pas !</h1>
            <a routerLink="/" class="waves-effect waves-teal btn-flat">
                Retourner à l' accueil
            </a>
        </div>`
})
export class PageNotFoundComponent {}