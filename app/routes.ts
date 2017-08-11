import { Routes } from '@angular/router'
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponnet,
    EventResolver,
} from './events/index'
import { Error404Component } from './errors/404.component'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // prefix starts with full redirect if full matches
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'events/session/new', component: CreateSessionComponnet },
]