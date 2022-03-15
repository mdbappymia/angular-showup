import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-food',
  templateUrl: './feature-food.component.html',
  styleUrls: ['./feature-food.component.css'],
})
export class FeatureFoodComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any;
  meals = [];

  ngOnInit(): void {
    this.http
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .subscribe((Response) => {
        if (Response) {
          this.data = Response;
          this.meals = this.data.meals;
          console.log(Response);
        }
      });
  }
}
