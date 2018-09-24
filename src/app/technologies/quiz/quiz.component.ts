import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private alive: boolean = true;
  private time_allocated: number = 30;
  private exam: any = [];
  public questions: any;
  private topicId: number;
  public selectedIndex: any;
  public selColor: any;
  public miliseconds: number;
  

  constructor(private _quizApi: QuizService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.topicId = params['id'];
    });

    this.miliseconds = this.time_allocated * 60 * 1000;
    interval(1000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(x => {
        this.miliseconds -= 1000;
        if (this.miliseconds < 0) {
          this.miliseconds = 0;
          this.alive = false;
          window.alert("Times Up, Quiz Submitted");
        }
      });

    this._quizApi.getQuestions$(this.topicId).subscribe(data => {
      if (data.success) {
        this.questions = data.questions;
      } else { }
    });

  }

  public selected(qns: number, answerId: number) {
    this.selectedIndex = qns;
    this.exam.push({ 'question_id': qns, 'answer_id': answerId, user_id: 1, test_id: 1 });
  }

  public submitExam() {
    this._quizApi.saveExam$(this.exam).subscribe(data => {
      if (data.success) {
        this._router.navigate(['technologies/answer-preview'])
      }
    })
  }

}
