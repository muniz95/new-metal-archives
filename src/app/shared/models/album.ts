export class Album {
  id: number;
  name: string;
  albumType: string;
  year: number;
  reviews: number;
  average: number;

  public constructor(init?: Partial<Album>) {
    Object.assign(this, init);
  }
}
