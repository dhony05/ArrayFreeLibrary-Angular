import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Topic } from 'src/app/models/topic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  @Output() addTopic: EventEmitter<any> = new EventEmitter();

  topicForm: FormGroup;

  // keyword: string;
  // name:string;
  // contributor:string;
  // contributor_email:string;
  // description: string;
  
  isCollapsed:boolean = true;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.topicForm= this.formBuilder.group({
      keyword: ['', Validators.required],
      name: ['', Validators.required],
      contributor: ['', Validators.required],
      contributor_email: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  onSubmit(){
    // const topic = {
    //   keyword: this.keyword,
    //   name: this.name,
    //   contributor: this.contributor,
    //   contributor_email: this.contributor_email,
    //   description:this.description

    //}
    if(this.topicForm.invalid){
      console.log("Invalid Form!");
      return;
    }
    this.toggleCollapse();
    this.addTopic.emit(this.topicForm.value);
    
  }

}
