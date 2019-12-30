import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicsComponent} from './components/topics/topics.component'


const routes: Routes = [
  { path: 'home',component:TopicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
