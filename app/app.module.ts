//// MODULES:
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
//// COMPONENTS:
import {
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    CreateSessionComponnet,
    SessionListComponent,
    UpvoteComponent,
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import {
    CollapsibleWellComponent,
    SimpleModalComponent
} from './common/index'
//// SERVICES:
import {
    EventService,
    EventRouteActivator,
    EventListResolver,
    VoterService,
} from './events/index'
import { JQ_TOKEN, TOASTR_TOKEN, Toastr } from './common/index'
import { AuthService } from './user/auth.service'
//// ETC:
import { ModalTriggerDirective } from './common/index'
import { appRoutes } from './routes'
import { DurationPipe, LocationValidator } from './events/index'

declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
    imports:
    [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    exports: [],
    declarations:
    [
        SimpleModalComponent,
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
        UpvoteComponent,
        ModalTriggerDirective,
        DurationPipe,
        LocationValidator,
    ],
    providers:
    [
        VoterService,
        EventRouteActivator,
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
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