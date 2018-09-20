import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'topics',component:TopicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
