import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  get price(): number {
    let summ: number = 0;
    this._items.forEach((item) => summ += item.price);
    return summ;
  }

  AllPrice(proc: number): number {
    return this.price - (this.price * proc/100);
  }

  remove(id: number): Buyable[] {
    this._items.forEach((element, i) => {if (element.id === id) this._items.splice(i, 1);});
    return this.items;
  }
}
