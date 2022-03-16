import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
  private shopMealUrl =
    'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

  constructor(private httpClient: HttpClient) {}
  public sendGetRequest() {
    return this.httpClient.get(this.url);
  }
  public getShopMeal() {
    return this.httpClient.get(this.shopMealUrl);
  }
}
