import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tweets-overview',
  templateUrl: './tweets-overview.component.html',
  styleUrls: ['./tweets-overview.component.css']
})


export class TweetsOverviewComponent implements OnInit {

  lastTweets: any;

  constructor(private router: Router, private api: ApiService) { 
    this.api.GetLastTweets(parseInt(localStorage.getItem('id'))).subscribe(result => {
      this.lastTweets = result;
      
    });

  }

  ngOnInit(): void {
  }

  editTweet=  (idd: number, text: string) => {

    
    this.router.navigate(['/details', {textContent: text, id: idd}]);
};
  
}
