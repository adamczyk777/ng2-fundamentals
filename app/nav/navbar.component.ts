import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service'
import { ISession } from '../events/index'
import { EventService } from '../events/index'

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/navbar.component.html',
    styles: [
        `
            .nav.navbar-nav {font-size: 15px; }
            li > a.active { color: #F97924; }
            #searchForm {margin-right: 100px; }
            @media (max-width: 1200px) {#searchForm {display: none}}
        `
    ]
})

export class NavbarComponent {
    searchTerm: string = ""
    foundSessions: ISession[]

    constructor(private authService: AuthService, private eventService: EventService) { }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions            
        })
    }
}