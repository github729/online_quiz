import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.css']
})
export class LatestJobsComponent implements OnInit {

  private location : any;
  public jobs : any; 

  constructor(private _jobsApi : JobsService,
    private _route : ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.location = params.name
    })
    this._jobsApi.getJobs$({'location':this.location}).subscribe(data => {
      if(data['success']) {
        this.jobs = data['jobs'];
        console.log(this.jobs)
      }
    })
  }

}
