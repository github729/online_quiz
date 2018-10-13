import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.css']
})
export class LatestJobsComponent implements OnInit {

  public jobs : any; 

  constructor(private _jobsApi : JobsService) { }

  ngOnInit() {
    
    this._jobsApi.getJobs$().subscribe(data => {
      if(data['success']) {
        this.jobs = data['jobs'];
        console.log(this.jobs)
      }
    })
  }

}
