import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  modalRef: MdbModalRef<LoginModalComponent>;

  registerForm: FormGroup = this.formBuilder.group({
    name : ['', Validators.required],
    surname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private modalService: MdbModalService, private api: ApiService, private formBuilder: FormBuilder, private router: Router) { }
  
  openModal() {
    this.modalRef = this.modalService.open(LoginModalComponent);
  }
  
  ngOnInit() {    

  }

  onSubmit(){
    this.api.Register(this.registerForm.value).subscribe((response: any) =>{
      console.log(response);
      if(response){
        this.api.Login(this.registerForm.value).subscribe((response: any) => {
          localStorage.setItem("token", response['token']);
          if (response['token']){
            this.router.navigateByUrl('/tweets');
          }
        });
      }
    });
  }
  
}
