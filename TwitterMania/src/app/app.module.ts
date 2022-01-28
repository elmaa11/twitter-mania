import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component'; 
import { TweetsOverviewComponent } from './tweets-overview/tweets-overview.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
//import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { ComposeTweetComponent } from './compose-tweet/compose-tweet.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';

import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'

import { ModalModule, TooltipModule, PopoverModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import {NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';
import { AddTweetDialogueComponent } from './dialogues/add-tweet-dialogue/add-tweet-dialogue.component';
import { EditBioDialogueComponent } from './dialogues/edit-bio-dialogue/edit-bio-dialogue.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetsOverviewComponent,
    TweetDetailsComponent,
    ComposeTweetComponent,
    MainPageComponent,
    ProfileComponent,
    LoginModalComponent,
    NavigationBarComponent,
    AddTweetDialogueComponent,
    EditBioDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule,
    ModalModule, TooltipModule, PopoverModule ,
    MDBBootstrapModule.forRoot(), MdbModalModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}, NgbActiveModal,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
