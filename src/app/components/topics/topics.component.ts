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

  constructor(private topicService:TopicService ) { 
  }
  ngOnInit() {
    this.topicService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
  }

  deleteTopic(topic:Topic){
    // using filter
    this.topics = this.topics.filter(t => t.keyword !== topic.keyword);
    this.topicService.deleteTopic(topic).subscribe();
    console.log("deleting me");
  }

}
