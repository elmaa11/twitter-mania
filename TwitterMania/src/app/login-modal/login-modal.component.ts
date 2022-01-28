import { Component, EventEmitter, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });


  constructor(public modalRef: MdbModalRef<LoginModalComponent>, private api: ApiService, private formBuilder: FormBuilder, private router: Router) {

   }

  ngOnInit(): void {


  }
  onSubmit(){
    this.api.Login(this.loginForm.value).subscribe((response: any) => {
      localStorage.setItem("token", response['token']);
      if (response['token']){
        this.router.navigateByUrl('/tweets');
        this.modalRef.close();
      }
    });
  }

}
