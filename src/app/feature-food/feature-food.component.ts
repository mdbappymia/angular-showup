import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feature-food',
  templateUrl: './feature-food.component.html',
  styleUrls: ['./feature-food.component.css'],
})
export class FeatureFoodComponent implements OnInit {
  constructor(private dataService: DataService) {}
  mealData: any;

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      this.mealData = data.meals;
    });
  }
}
