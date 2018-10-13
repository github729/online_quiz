import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  private id : any;
  public job : any;

  constructor(private _jobsApi : JobsService,
    private  _route : ActivatedRoute) { }

  ngOnInit() {
    
    this._route.params.subscribe(params => {
      this.id = params.id;
    });

    this._jobsApi.getJobById$(this.id).subscribe(data => {
      if(data['success']) {
        this.job = data['job'];
        console.log(this.job)
      }
    })
  }

}
