import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {

  
  constructor(private router: Router) {}
    
    ngOnInit(): void {
    }
    allTweets=  () => {
      this.router.navigateByUrl('/tweets');
  };
  collapsed = true;
      
}