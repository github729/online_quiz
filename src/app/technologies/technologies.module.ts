import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule
  ],
  declarations: [
    CoursesComponent,
    TopicsComponent
  ]
})
export class TechnologiesModule { }
