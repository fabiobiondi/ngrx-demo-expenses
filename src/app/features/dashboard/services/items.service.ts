import { HttpClient } from '@angular/common/http';
import { Item } from '../../../model/item';
import { Observable } from 'rxjs';

export class ItemsService {
  constructor(private http: HttpClient) {}

  loadItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/products');
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  addItem(item: Partial<Item>): Observable<Item> {
    return this.http.post<Item>('http://localhost:3000/products', item);
  }
}
