//// MODULES:
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
//// COMPONENTS:
import 
{
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavbarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
//// SERVICES:
import
{
    EventService,
    EventRouteActivator,
    EventListResolver,
} from './events/index'
import { ToastrService } from './common/toastr.service'
//// ETC:
import { appRoutes } from './routes'

@NgModule({
    imports:
    [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
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
    ],
    providers:
    [
        EventRouteActivator,
        EventService,
        ToastrService,
        EventListResolver,
        { 
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState },
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really wwant to cancel?')
    return true
}