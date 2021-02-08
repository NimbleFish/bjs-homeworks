import Propertyes from './Propertyes';

export default class Movie implements Propertyes {
  constructor(
    readonly name: string,
    readonly header: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly type: Array<string>,
    readonly time: number
  ) {
    this.name = name;
    this.header = header;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.type = type;
    this.time = time;
  }

  private info: Object = {name: this.name, header: this.header, year: this.year, country: this.country, slogan: this.slogan, type: this.type, time: this.time};

  get getInfo(): Object {
    return this.info;
  }
}
