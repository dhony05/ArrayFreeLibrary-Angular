import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  keyword: string;
  name:string;
  contributor:string;
  contributor_email:string;
  description: string;
  
  isCollapsed:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  onSubmit(){
    const topic = {
      keyword: this.keyword,
      name: this.name,
      contributor: this.contributor,
      contributor_email: this.contributor_email,
      description:this.description

    }
  }

}
