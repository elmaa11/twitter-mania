import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  modalRef: MdbModalRef<LoginModalComponent>;

  constructor(private modalService: MdbModalService) { }
  
  openModal() {
    this.modalRef = this.modalService.open(LoginModalComponent)
  }
  
  ngOnInit() {
  }

  
}
