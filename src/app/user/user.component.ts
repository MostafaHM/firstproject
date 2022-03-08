import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service.service';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userServive:UsersService) { }
  usersList:any;

  ngOnInit(): void {
    this.userServive.getUsers().subscribe((data)=>{
      this.usersList = data;
  })
  }
}
