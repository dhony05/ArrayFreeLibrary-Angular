import { Component, OnInit } from '@angular/core';
import { Topic} from '../../models/topic'
import {TopicService} from '../../services/topic.service'
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: Topic[];

  constructor() { 
  }
  ngOnInit() {
  }

}
