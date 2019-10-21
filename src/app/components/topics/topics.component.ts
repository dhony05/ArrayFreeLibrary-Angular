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

  addTopic(topic:Topic){
    // post request to the server throug service
    // when we get the response back we add it to the UI
    this.topicService.addTopic(topic).subscribe(topic => {
    this.topics.push(topic);
    this.topics = this.topics.filter(t => t.keyword !== topic.keyword);

    console.log("adding topic")
    })

  }

}
