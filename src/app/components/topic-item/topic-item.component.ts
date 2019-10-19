import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { Topic } from 'src/app/models/topic';
import {TopicService} from '../../services/topic.service'

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input() topic: Topic;
  constructor(private topicService:TopicService) { }
  @Output() deleteTopic: EventEmitter<Topic> = new EventEmitter();
  ngOnInit() {
  }

  // clases for topic item bootstrap
  setClasses(){
    let classes = [
        "col-md-8",
       " border",
       " border-secondary",
       "list-group-item",
      "list-group-item-action",
      "mx-auto"]
    
       return classes;
  }

  onDelete(topic){

    this.deleteTopic.emit(topic);
    console.log("deleting topic");
  }
  

}
