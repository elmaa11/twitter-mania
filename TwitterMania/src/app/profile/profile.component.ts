import { Component, OnInit } from '@angular/core';
import { EditBioDialogueComponent } from '../dialogues/edit-bio-dialogue/edit-bio-dialogue.component';
import { ApiService } from '../services/api.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditProfileModalComponent } from '../edit-profile-modal/edit-profile-modal.component';

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
  modalRef: MdbModalRef<EditProfileModalComponent>;
  
  constructor(private api: ApiService, public dialog: MatDialog, private modalService: MdbModalService) { 

    

  }

  ngOnInit(): void {
    this.api.GetUser(parseInt(localStorage.getItem('id'))).subscribe(result => {
      this.user = result;
    });
  }

  editBio(){
    this.dialog.open(EditBioDialogueComponent, {
      data: {
        text: this.user.bio
      }
    });
  }
  
  editData() {
    this.modalRef = this.modalService.open(EditProfileModalComponent);
  }


}
