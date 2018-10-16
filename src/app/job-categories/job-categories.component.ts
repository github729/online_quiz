import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.css']
})
export class JobCategoriesComponent implements OnInit {

  public locations : any;

  constructor(private _dataApi : DataService) { }

  ngOnInit() {
    this._dataApi.getAllLocations$().subscribe(data => {
      if(data['success']) {
        this.locations = data['data'];
        console.log(this.locations)
      }
    })
  }

}
