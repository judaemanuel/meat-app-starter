import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { ROUTES } from './about.route';

@NgModule({
    declarations: [AboutComponent],
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: []
})
export class AboutModule { }
