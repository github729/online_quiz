import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicsService } from '../../services/topics.service';
import { SinglteonService } from '../../services/singlteon.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  private id: any;
  public topics: any;

  constructor(private _route: ActivatedRoute,
    private _topicsApi: TopicsService,
    private _singleteonApi: SinglteonService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id')
    this._topicsApi.getTopics$(this.id).subscribe(data => {
      if (data.success) {
        this.topics = data.chapters;
      } else { }
    });

  }

}
