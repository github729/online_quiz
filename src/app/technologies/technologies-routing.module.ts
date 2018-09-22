import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'topics',component:TopicsComponent
  },
  {
    path:'test/:id',component:QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
