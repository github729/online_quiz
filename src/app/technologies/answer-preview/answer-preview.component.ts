import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-preview',
  templateUrl: './answer-preview.component.html',
  styleUrls: ['./answer-preview.component.css']
})
export class AnswerPreviewComponent implements OnInit {

  public examResults: any;
  public totalQns: number;
  public correctAns: number = 0;
  public testId : any;

  constructor(private _quizApi: QuizService,
    private _router: Router,
    private _route: ActivatedRoute) { 
    }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.testId = params['test_id'];
    });
    let data = { 'test_id': this.testId }
    this._quizApi.getExamResults$(data).subscribe(data => {
      if (data['success']) {
        this.examResults = data['data'];
        this.examResults.forEach(val => {
          val.question.question_options.forEach(option => {
            if ((val.answer_id == option.id) && (option.is_correct == true)) {
              this.correctAns++;
            }
          });
        });
        this.totalQns = this.examResults.length;
      }
    });
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

}
