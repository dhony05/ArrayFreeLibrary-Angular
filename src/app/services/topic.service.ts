import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Topic} from '../models/topic'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicsURL:string = 'http://localhost:8080/topics';
  topicsLimit = '?_limit=15';

  constructor(private  http:HttpClient) { }

  getTopics():Observable<Topic[]>{
    return this.http.get<Topic[]>(`${this.topicsURL}${this.topicsLimit}`);
    
  
  }

  deleteTopic(topic:Topic):Observable<Topic>{
    const url = `${this.topicsURL}/${topic.keyword}`;
    return this.http.delete<Topic>(url,httpOptions);

  }

  // adding topic
  addTopic(topic:Topic):Observable<Topic>{
    return this.http.post<Topic>(this.topicsURL, topic, httpOptions);

  }
}
