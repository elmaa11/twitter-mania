import { Component, OnInit } from '@angular/core';
import { EditBioDialogueComponent } from '../dialogues/edit-bio-dialogue/edit-bio-dialogue.component';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

export interface DialogData {
  text: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user : any;


  constructor(private api: ApiService, public dialog: MatDialog) { 

    this.api.GetUser(parseInt(localStorage.getItem('id'))).subscribe(result => {
      console.log(result);
      this.user = result;
    })

  }


  ngOnInit(): void {
  }

  editBio(){
    this.dialog.open(EditBioDialogueComponent, {
      data: {
        text: this.user.bio
      }
    });
  }
  
  


}
