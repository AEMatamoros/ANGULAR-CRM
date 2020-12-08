import { Component, OnInit } from '@angular/core';
import { BuysService } from 'src/app/services/buys/buys.service'
import { AuthService} from 'src/app/services/auth/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent implements OnInit {
  products
  user
  orders
  company
  buys
  constructor(private buysService:BuysService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.company=JSON.parse(localStorage.getItem('companyData')) 
    this.buysService.getBuys().subscribe(res=> {this.orders=res,
      this.orders.forEach(order => {
        order.products.forEach(product => {
          product['total']=product.price * product.units
        });
      });
    
    })
    
  }
  

}
