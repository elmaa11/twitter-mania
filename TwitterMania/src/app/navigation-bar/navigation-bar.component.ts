import { Component } from '@angular/core';    
import { Router } from '@angular/router'
import { ApiService } from '../services/api.service';

@Component({    
    selector:'app-navigation-bar',    
    templateUrl:'./navigation-bar.component.html',    
    styleUrls:['./navigation-bar.component.css']    
    }) 

export class NavigationBarComponent{
    constructor(private router: Router, private api: ApiService) {}
    
    ngOnInit(): void {
    }
    allTweets=  () => {
      this.router.navigateByUrl('/tweets');   
    };
    openProfile= () => {
      this.router.navigateByUrl('/profile');
    };
    logOut= () => {
      this.api.Logout();
      
      this.router.navigateByUrl('/main');
    };

    collapsed = true;
    
}