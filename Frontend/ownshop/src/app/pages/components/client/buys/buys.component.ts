import { Component, OnInit } from '@angular/core';
import { BuysService } from 'src/app/services/buys/buys.service'
import { AuthService} from 'src/app/services/auth/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent implements OnInit {
  products
  user
  orders
  constructor(private buysService:BuysService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('userData')) 
    this.buysService.getUserBuys(this.user['_id']).subscribe(res=> {this.orders=res
      console.log(this.orders)
      this.orders.forEach(order => {
        order.products.forEach(product => {
          product['total']=product.price*product.units
        });
      });
    })
  }
  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/');
  }

}
