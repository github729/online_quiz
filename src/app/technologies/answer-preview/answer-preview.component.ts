import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-preview',
  templateUrl: './answer-preview.component.html',
  styleUrls: ['./answer-preview.component.css']
})
export class AnswerPreviewComponent implements OnInit {

  public examResults : any ;
  
  constructor(private _quizApi : QuizService,
    private _router : Router) { }

  ngOnInit() {
    let data =  {'userId':1,'testId':1}
    this._quizApi.getExamResults$(data).subscribe(data => {
      if (data.success) {
        this.examResults = data.data;
        console.log(data)
        // this._router.navigate(['technologies/answer-preview'])
      }
    })
  }

}