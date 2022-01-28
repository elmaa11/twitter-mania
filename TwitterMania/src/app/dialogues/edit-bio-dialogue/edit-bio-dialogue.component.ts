import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { stringify } from 'querystring';
import { PatchUser } from 'src/app/interfaces/patch-user';
import { DialogData } from 'src/app/profile/profile.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-bio-dialogue',
  templateUrl: './edit-bio-dialogue.component.html',
  styleUrls: ['./edit-bio-dialogue.component.css']
})
export class EditBioDialogueComponent implements OnInit {

  editBioForm: FormGroup = this.formBuilder.group({
    bio: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private dialogRef: MatDialogRef<EditBioDialogueComponent >) {
    
    this.editBioForm.setValue({bio: this.data.text});
   }

  ngOnInit(): void {
  }
  editBio(){
    var json: JSON = JSON.parse("[{\"op\":\"replace\",\"path\":\"/bio\",\"value\":" + JSON.stringify(this.editBioForm.controls['bio'].value) +"}]");
    // var user : PatchUser;
    // user = 
    // {
    //   op : 'replace',
    //   path :'/bio',
    //   value : this.editBioForm.get('bio').value
    // }

    this.api.EditUserBio(parseInt(localStorage.getItem('id')), json).subscribe((response: any) => {
      if (response){
        this.dialogRef.close();
      }
    });
    
  }

}
