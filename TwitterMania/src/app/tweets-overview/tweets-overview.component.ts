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
    this.api.GetLastTweets(parseInt(localStorage.getItem('id'))).subscribe((result : any[] ) => {
      
      if (result.length === 0){
          document.getElementById("divNoTweets").style.visibility = "visible";
        }
      else {
      this.lastTweets = result;
      }
      
    });

  }

  ngOnInit(): void {
    document.getElementById("divNoTweets").style.visibility = "hidden";
  }

  editTweet=  (idd: number, text: string) => {

    
    this.router.navigate(['/details', {textContent: text, id: idd}]);
};

deleteTweet(id: number){
  this.api.DeleteTweet(id).subscribe((response: any) => {
    if (!response)
      location.reload();
  });
}
firstTweet(){

  this.router.navigateByUrl('/compose');
}
  
}
