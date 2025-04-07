import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { ServiceComponent } from './components/service/service.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'input', component: InputComponent },
    { path: 'output', component: OutputComponent },
    { path: 'view-child', component: ViewChildComponent },
    { path: 'ng-content', component: NgContentComponent },
    { path: 'service', component: ServiceComponent }
];
