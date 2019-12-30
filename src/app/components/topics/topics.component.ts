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
    console.log("here");
    this.topicService.getTopics().subscribe((data: Topic[])=> {
      this.topics = data;
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
    this.topicService.addTopic(topic).subscribe(() => {
    this.getAll();
    //this.topics = this.topics.filter(t => t.keyword !== topic.keyword);

    //this.topics = this.topics.filter(t => t.keyword !== topic.keyword);
    
    
    });
  
    
    this.topics = this.topics.filter(t => t.keyword !== topic.keyword);

  }

  getAll(){
    this.topicService.getTopics().subscribe((data: Topic[]) =>{
      this.topics=data;
    });
  }

}
