import { Component, OnInit } from '@angular/core';
import { ComposeTweetService } from './compose-tweet.service';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-compose-tweet',
  templateUrl: './compose-tweet.component.html',
  styleUrls: ['./compose-tweet.component.css']
})
export class ComposeTweetComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = ""; 
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  newTweetForm: FormGroup = this.formBuilder.group({
    textContent: ['', Validators.required],
  });

  collapsed = true;
  constructor(private composeTweetService: ComposeTweetService, private api: ApiService, private formBuilder: FormBuilder) {
    

   }

  ngOnInit(): void {
  }
   
  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
}

onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.composeTweetService.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );
}

addNewTweet(){
  const text = new Date();
  let tweet : Tweet = {
    userId : 1,
    textContent : this.newTweetForm.value.textContent,
    dateTime :  text.toJSON()
  };
  console.log(tweet);
  this.api.PostNewTweet(tweet).subscribe((response) =>{
    console.log(response);
    this.newTweetForm.reset();
  });
}
}
