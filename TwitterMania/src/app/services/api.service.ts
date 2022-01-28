import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../interfaces/tweet';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {


   }

   public GetUser(id : number){
     return this.http.get(`https://localhost:44323/api/tweet/user/${id}`);
   }

   public GetLastTweets(id : number){
     return this.http.get(`https://localhost:44323/api/tweet/lasttweets/${id}`);
   }

   public PostNewTweet(tweet: Tweet){
     return this.http.post(`https://localhost:44323/api/tweet/addtweet`, tweet);
   }

   public Login(login: User){
     return this.http.post('https://localhost:44323/api/login', login);
   }

   public Logout(){
     localStorage.removeItem('token');
   }

   public Register(register: User){
    return this.http.post('https://localhost:44323/api/tweet/adduser', register);
   }
}
