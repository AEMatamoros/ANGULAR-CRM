import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from 'src/app/services/user/user.service'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  @Input() company
  user
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.company=params
      this.userService.getUser(this.company.owner).subscribe(result=>{this.user=result,console.log(result)})
    
    })
  }

}
