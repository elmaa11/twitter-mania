import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tweets-overview',
  templateUrl: './tweets-overview.component.html',
  styleUrls: ['./tweets-overview.component.css']
})


export class TweetsOverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  editTweet=  () => {
    this.router.navigateByUrl('/details');
};
  
}
