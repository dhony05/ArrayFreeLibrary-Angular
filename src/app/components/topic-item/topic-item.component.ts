import { Component, OnInit,Input } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input() topic: Topic;
  constructor() { }

  ngOnInit() {
  }

  // clases for topic item bootstrap
  setClasses(){
    let classes = [
       "col-md-1",
       " border",
       " border-secondary"]
    
       return classes;
  }
  

}
