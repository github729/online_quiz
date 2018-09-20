import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answer/answer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopicsComponent } from './topics/topics.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent,
    AnswerComponent,
    HomeComponent,
    RegisterComponent,
    TechnologiesComponent,
    HeaderComponent,
    FooterComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
