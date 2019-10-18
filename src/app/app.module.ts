import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicItemComponent } from './components/topic-item/topic-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTopicComponent,
    TopicsComponent,
    TopicItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
