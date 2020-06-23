import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { GitSearchService} from './git-search-service/git-search.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repos } from '../repos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Users;
  repos: Repos;
  userRepos: any;
  userName: string;


  constructor(private gitSearchService: GitSearchService) {
  }
 findName() {

   this.gitSearchService.updateProfile(this.userName);

   this.gitSearchService.getUserInfo();
   this.user = this.gitSearchService.user;
   console.log(this.user);

   this.gitSearchService.getRepoInfo(this.userName);
   this.userRepos = this.gitSearchService.newRepo;
 }

  ngOnInit() {

    this.gitSearchService.getRepoInfo(this.userName);
    this.repos = this.gitSearchService.repo;
    this.gitSearchService.getUserInfo();
    this.user = this.gitSearchService.user;

  }

}
