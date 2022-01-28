import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any;
  constructor(private api: ApiService) { 

    this.api.GetUser(parseInt(localStorage.getItem('id'))).subscribe(result => {
      console.log(result);
      this.user = result;
    })

  }

  ngOnInit(): void {
  }





}
