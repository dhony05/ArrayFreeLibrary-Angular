import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopic(){
    return [
      {
        keyword:"springboot",
    name:"Spring Boot",
    contributor:"example",
    contributor_email:"example@email.com",
    description:"This is an example"},
    {
      keyword:"springboot3",
    name:"Spring example 4",
    contributor:"examsdfsdfple",
    contributor_email:"example@email.com",
    description:"This is asdfsdfn example"},
    {
      keyword:"javascript",
      name:"js the book",
      contributor:"example",
      contributor_email:"example@email.com",
      description:"This is an example js the book"
    }
  ]
  
  }
}
