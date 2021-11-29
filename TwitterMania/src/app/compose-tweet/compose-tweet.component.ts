import { Component, OnInit } from '@angular/core';
import { ComposeTweetService } from './compose-tweet.service';

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

  collapsed = true;
  constructor(private composeTweetService: ComposeTweetService) { }

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

}
