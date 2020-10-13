import {Injectable} from '@angular/core';
import {Product} from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class StoredItemsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Pepperoni',
      dollarPrice: 100,
      description: 'Mozzarella cheese,Smoked sausage, chili pepper, Tomatoes in their own juice, Oregano, Garlic, ground black pepper',
      imgName: '1'
    },
    {id: 2, name: 'Margarita', dollarPrice: 100, description: 'Mozzarella cheese, tomatoes, fresh Basil, tomato sauce', imgName: '2'},
    {
      id: 3,
      name: 'Four Cheeses',
      dollarPrice: 100,
      description: 'Tomato sauce, mozzarella, Parmesan, Gorgonzola cheese, artichokes and oregano',
      imgName: '3'
    },
    {
      id: 4,
      name: 'Calzone',
      dollarPrice: 100,
      description: 'Tomato sauce, mozzarella, ham, mushrooms, artichokes, anchovies and oregano',
      imgName: '4'
    },
    {id: 5, name: 'Hawaiian', dollarPrice: 100, description: 'Pineapple, chicken fillet, ham, cheese , oregano, tomato paste', imgName: '5'},
    {id: 6, name: 'Diavola', dollarPrice: 100, description: 'Tomato sauce, mozzarella, hot salami and chili pepper', imgName: '6'},
    {id: 7, name: 'Neapolitano', dollarPrice: 100, description: 'Tomato sauce, mozzarella, oregano, anchovies', imgName: '7'},
    {id: 8, name: 'Marinara', dollarPrice: 100, description: 'Tomato sauce, garlic and Basil', imgName: '8'},
    {
      id: 9,
      name: 'Emiliana',
      dollarPrice: 100,
      description: 'Tomato sauce, mozzarella, eggplant, boiled potatoes and sausage',
      imgName: '9'
    },
    {
      id: 10,
      name: 'Belarusian',
      dollarPrice: 100,
      description: 'Hunting sausages, mozzarella cheese, tomatoes, red onion, Basil, Parmesan cheese, tomato sauce',
      imgName: '10'
    }
  ]  ;

  constructor() {
  }

  public getAllItems(): Product[] {
    return this.products;
  }
}
