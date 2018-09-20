import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { TopicsComponent } from './topics/topics.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    TopicsComponent,
    QuizComponent,
    AnswerComponent,
    QuestionsComponent
  ]
})
export class TechnologiesModule { }
