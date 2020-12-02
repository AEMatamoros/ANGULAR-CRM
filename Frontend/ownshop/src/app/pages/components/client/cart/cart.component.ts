import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { BuysService } from 'src/app/services/buys/buys.service'
import { AuthService} from 'src/app/services/auth/auth.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products
  total:any=0
  buyOk:boolean=false
  user
  
  constructor(private buysService:BuysService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    
    this.callData()
    
    
  }

  remove(id){
    var filtered=this.products.filter((element,index,arr)=>{
        return element['_id']!=id
    })
    localStorage.setItem('cart',JSON.stringify(filtered))
    this.callData()
  }

  callData(){
    this.user=JSON.parse(localStorage.getItem('userData')) 
    this.products= JSON.parse(localStorage.getItem('cart'))
    if(this.products!==null){
    this.products.forEach(product => {
      this.total=(product.price*product.units)+ this.total
    });
    }
  }

  buy(){
    this.user=JSON.parse(localStorage.getItem('userData'))
    this.products= JSON.parse(localStorage.getItem('cart'))
    this.buysService.postBuy({'products':this.products},this.user['_id']).subscribe(res=>console.log(res))
    localStorage.removeItem('cart');
    this.buyOk=true
    this.callData()
    
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/');
  }
}
