//// MODULES:
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//// COMPONENTS:
import {
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    CreateSessionComponnet,
    SessionListComponent,
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
//// SERVICES:
import {
    EventService,
    EventRouteActivator,
    EventListResolver,
} from './events/index'
import { ToastrService } from './common/toastr.service'
import { AuthService } from './user/auth.service'
//// ETC:
import { appRoutes } from './routes'
import { DurationPipe } from './events/index'

@NgModule({
    imports:
    [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations:
    [
        Error404Component,
        CreateEventComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        CreateSessionComponnet,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
    ],
    providers:
    [
        EventRouteActivator,
        EventService,
        ToastrService,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        AuthService,
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really wwant to cancel?')
    return true
}