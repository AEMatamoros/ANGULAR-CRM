import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res=>{this.users=res,console.log(this.users)},err=>console.log(err))
  }

}
