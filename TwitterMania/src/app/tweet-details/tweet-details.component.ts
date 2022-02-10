import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.css']
})
export class TweetDetailsComponent implements OnInit {


  editTweetForm: FormGroup = this.formBuilder.group({
    id: new FormControl({value: '', disabled: true}, Validators.required),
    text: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private api: ApiService) {}
    
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.editTweetForm.patchValue({id: parseInt( params.get('id')), text: params.get('textContent')});
      });
    }
    onSubmit(){
      var json: JSON = JSON.parse("[{\"op\":\"replace\",\"path\":\"/textContent\",\"value\":" + JSON.stringify(this.editTweetForm.controls['text'].value) +"}]");
    
      this.api.EditTweet(parseInt(this.editTweetForm.controls['id'].value), json).subscribe((response: any) => {
        if (response)
        this.allTweets();
        });
    }

    allTweets=  () => {
      this.router.navigateByUrl('/tweets');
  };
      
}