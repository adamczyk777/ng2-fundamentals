// MODULES:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// COMPONENTS:
import { ProfileComponent } from './profile.component';
// ETC:
import { userRoutes } from './user.routes'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),        
    ],
    exports: [],
    declarations: [
        ProfileComponent,
    ],
    providers: [],
})
export class UserModule { }
