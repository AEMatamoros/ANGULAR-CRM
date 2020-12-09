import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service'
import { UsersComponent} from 'src/app/pages/components/admin/users/users/users.component'

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  @Input() user
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;

  constructor(private userService:UserService,private UsersComponent:UsersComponent) { }

  ngOnInit(): void {
  }

  delete(){
    this.userService.deleteUser(this.user['_id']).subscribe(res=>{
      this.closeAddExpenseModal.nativeElement.click();
      this.UsersComponent.ngOnInit();
    },err=>console.log(err))
  }

}
