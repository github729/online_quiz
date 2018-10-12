import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-latest-jobs',
  templateUrl: './latest-jobs.component.html',
  styleUrls: ['./latest-jobs.component.css']
})
export class LatestJobsComponent implements OnInit {

  constructor(private jobsApi : JobsService) { }

  ngOnInit() {
      this.jobsApi.getJobs$().subscribe(data => {
        console.log(data)
      })
  }

}
