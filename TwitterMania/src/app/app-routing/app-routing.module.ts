import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { TweetsOverviewComponent } from '../tweets-overview/tweets-overview.component';
import { TweetDetailsComponent } from '../tweet-details/tweet-details.component';
import { ComposeTweetComponent } from '../compose-tweet/compose-tweet.component';
import { ProfileComponent } from '../profile/profile.component';
import { MainPageComponent } from '../main-page/main-page.component';

const routes: Routes = [
  {
  path: 'tweets',
  component: TweetsOverviewComponent
  },
  {
  path: 'details',
  component: TweetDetailsComponent
  },
  {
    path: 'compose',
    component: ComposeTweetComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
