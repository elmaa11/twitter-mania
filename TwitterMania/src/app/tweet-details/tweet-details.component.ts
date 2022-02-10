import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {

  tweetText: string;
  tweetId: number;

  editTweetForm: FormGroup = this.formBuilder.group({
    id: new FormControl({value: '', disabled: true}, Validators.required),
    text: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {}
    
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.tweetText = params.get('textContent');
        this.tweetId = parseInt( params.get('id'));
        this.editTweetForm.patchValue({id: this.tweetId, text: this.tweetText});
        console.log(params.get('textContent'));
      });
    }
    allTweets=  () => {
      this.router.navigateByUrl('/tweets');
  };
  collapsed = true;
      
}