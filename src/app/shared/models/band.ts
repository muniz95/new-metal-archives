export class Band {
  id: number;
  name: string;
  origin: string;
  location: string;
  status: string;
  formedIn: number;
  yearsActive: string;
  genre: string;
  lyricalThemes: string;
  currentLabel: string;
  bio: string;

  public constructor(init?: Partial<Band>) {
    Object.assign(this, init);
  }
}
