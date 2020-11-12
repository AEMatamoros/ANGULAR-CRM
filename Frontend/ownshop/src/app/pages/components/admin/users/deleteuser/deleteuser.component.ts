import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  @Input() user
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  delete(){
    this.userService.deleteUser(this.user['_id']).subscribe(res=>location.reload(),err=>console.log(err))
  }

}
