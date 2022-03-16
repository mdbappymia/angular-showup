import { Component, Injectable, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class ShopComponent implements OnInit {
  constructor(private dataService: DataService) {}

  shopMeals: any;
  selectItems: any[] = [{ name: 'hello' }];

  addToCart(id: number) {
    const item = this.shopMeals.filter((meal: any) => meal.idMeal === id);
    this.selectItems.push(item[0]);
    console.log(this.selectItems);
  }

  ngOnInit(): void {
    this.dataService.getShopMeal().subscribe((data: any) => {
      this.shopMeals = data.meals;
    });
  }
}
