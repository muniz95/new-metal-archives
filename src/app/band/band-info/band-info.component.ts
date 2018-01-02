import { Component, OnInit } from '@angular/core'
import { Band } from '../../shared/models/band'
import { Album } from '../../shared/models/album'

@Component({
  selector: 'app-band-info',
  templateUrl: './band-info.component.html',
  styleUrls: ['./band-info.component.css']
})
export class BandInfoComponent implements OnInit {

  band: Band = new Band()
  discography: Array<Album> = []

  constructor() { }

  ngOnInit() {
    this.initBand()
    this.initDiscography()
  }

  private initBand() {
    this.band = new Band({
      id: 1,
      name: 'Metallica',
      origin: 'United States',
      location: 'Los Angeles/San Francisco, California',
      status: 'Active',
      formedIn: 1981,
      yearsActive: '1981 - present',
      genre: 'Thrash Metal (early), Hard Rock/Heavy/Thrash Metal (later)',
      lyricalThemes: 'Corruption, Death, Life, Internal struggles, Anger',
      currentLabel: 'Blackened Records',
      // tslint:disable-next-line:max-line-length
      bio: 'Metallica was formed by Lars Ulrich and James Hetfield in the fall of 1981. Ulrich (who originally went to the US to play tennis) had, during that summer, met Brian Slagel of Metal Blade Records and had secured an appearance on an upcoming compilation called Metal Massacre but had no band. He quickly found Hetfield, who was playing in Leather Charm at the time, and one day in December of 1981, they recorded the rhythm tracks to a remake of a Leather Charm song, "Hit the Lights." Hetfield tracked all guitars and bass on this recording, except for one of the solos which was performed by guitarist Lloyd Grant in January 1982, and the song appeared on Metal Massacre in February.'
    })
  }

  private initDiscography() {
    this.discography = [
      new Album({
        name: 'No Life \'til Leather',
        albumType: 'Demo',
        year: 1982,
        reviews: 9,
        average: 87
      }),
      new Album({
        name: 'Kill \'Em All',
        albumType: 'Full-length',
        year: 1983,
        reviews: 29,
        average: 88
      }),
      new Album({
        name: 'Whiplash',
        albumType: 'Single',
        year: 1983,
        reviews: 2,
        average: 84
      }),
      new Album({
        name: 'Jump in the Fire',
        albumType: 'Single',
        year: 1984,
        reviews: 4,
        average: 67
      }),
      new Album({
        name: 'Ride the Lightning',
        albumType: 'Full-length',
        year: 1984,
        reviews: 26,
        average: 94
      }),
      new Album({
        name: 'Creeping Death',
        albumType: 'Single',
        year: 1984,
        reviews: 6,
        average: 90
      }),
      new Album({
        name: 'Master of Puppets',
        albumType: 'Full-length',
        year: 1986,
        reviews: 31,
        average: 79
      }),
      new Album({
        name: 'Master of Puppets',
        albumType: 'Single',
        year: 1986
      }),
      new Album({
        name: 'The $5.98 EP - Garage Days Re-Revisited',
        albumType: 'EP',
        year: 1987,
        reviews: 5,
        average: 90
      }),
      new Album({
        name: 'Cliff \'Em All!',
        albumType: 'Live album',
        year: 1987,
        reviews: 4,
        average: 97
      }),
      new Album({
        name: '...and Justice for All',
        albumType: 'Full-length',
        year: 1988,
        reviews: 26,
        average: 81
      }),
      new Album({
        name: 'Harvester of Sorrow',
        albumType: 'Single',
        year: 1988,
        reviews: 3,
        average: 87
      }),
      new Album({
        name: 'Eye of the Beholder',
        albumType: 'Single',
        year: 1988
      }),
      new Album({
        name: 'One',
        albumType: 'Single',
        year: 1989,
        reviews: 4,
        average: 85
      }),
      new Album({
        name: '2 of One',
        albumType: 'Video',
        year: 1989,
        reviews: 1,
        average: 84
      }),
      new Album({
        name: 'The Good, the Bad and the Live: The 6 1/2 Year Anniversary 12\" Collection',
        albumType: 'Compilation',
        year: 1990
      }),
      new Album({
        name: 'Enter Sandman',
        albumType: 'Single',
        year: 1991,
        reviews: 3,
        average: 71
      }),
      new Album({
        name: 'Metallica',
        albumType: 'Full-length',
        year: 1991,
        reviews: 28,
        average: 72
      }),
      new Album({
        name: 'The Unforgiven',
        albumType: 'Single',
        year: 1991,
        reviews: 1,
        average: 99
      }),
      new Album({
        name: 'Nothing Else Matters',
        albumType: 'Single',
        year: 1992,
        reviews: 2,
        average: 73
      }),
      new Album({
        name: 'Live at Wembley Stadium',
        albumType: 'Single',
        year: 1992,
        reviews: 1,
        average: 76
      }),
      new Album({
        name: 'For Those About to Rock - Monsters in Moscow',
        albumType: 'Split video',
        year: 1992
      }),
      new Album({
        name: 'Wherever I May Roam',
        albumType: 'Single',
        year: 1992,
        reviews: 1,
        average: 76
      }),
      new Album({
        name: 'A Year and a Half in the Life of Metallica Part 1 & 2',
        albumType: 'Video',
        year: 1992
      }),
      new Album({
        name: 'Sad but True',
        albumType: 'Single',
        year: 1993,
        reviews: 1,
        average: 45
      }),
      new Album({
        name: 'Live Shit: Binge & Purge',
        albumType: 'Live album',
        year: 1993,
        reviews: 7,
        average: 89
      }),
      new Album({
        name: 'One (live)',
        albumType: 'Single',
        year: 1994,
        reviews: 1,
        average: 95
      }),
      new Album({
        name: 'Until It Sleeps',
        albumType: 'Video',
        year: 1996
      }),
      new Album({
        name: 'Until It Sleeps',
        albumType: 'Single',
        year: 1996,
        reviews: 2,
        average: 45
      }),
      new Album({
        name: 'Load',
        albumType: 'Full-length',
        year: 1996,
        reviews: 19,
        average: 58
      }),
      new Album({
        name: 'Hero of the Day',
        albumType: 'Single',
        year: 1996,
        reviews: 1,
        average: 94
      }),
      new Album({
        name: 'Mama Said',
        albumType: 'Single',
        year: 1996,
        reviews: 1,
        average: 24
      }),
      new Album({
        name: 'King Nothing',
        albumType: 'Single',
        year: 1997,
        reviews: 2,
        average: 91
      }),
      new Album({
        name: 'The Memory Remains',
        albumType: 'Single',
        year: 1997,
        reviews: 1,
        average: 75
      }),
      new Album({
        name: 'ReLoad',
        albumType: 'Full-length',
        year: 1997,
        reviews: 14,
        average: 58
      }),
      new Album({
        name: 'Live in London - Antipodean Tour Edition',
        albumType: 'Single',
        year: 1998
      }),
      new Album({
        name: 'The Unforgiven II',
        albumType: 'Single',
        year: 1998
      }),
      new Album({
        name: 'Fuel',
        albumType: 'Single',
        year: 1998,
        reviews: 2,
        average: 60
      }),
      new Album({
        name: 'Turn the Page',
        albumType: 'Single',
        year: 1998,
        reviews: 1,
        average: 75
      }),
      new Album({
        name: 'Garage Inc.',
        albumType: 'Full-length',
        year: 1998,
        reviews: 9,
        average: 69
      }),
      new Album({
        name: 'Cunning Stunts',
        albumType: 'Video',
        year: 1998,
        reviews: 3,
        average: 84
      }),
      new Album({
        name: 'Whiskey in the Jar',
        albumType: 'Single',
        year: 1999,
        reviews: 1,
        average: 80
      }),
      new Album({
        name: 'Die Die My Darling',
        albumType: 'Single',
        year: 1999,
        reviews: 1,
        average: 71
      }),
      new Album({
        name: 'Nothing Else Matters',
        albumType: 'Single',
        year: 1999,
        reviews: 1,
        average: 85
      }),
      new Album({
        name: 'S&M',
        albumType: 'Live album',
        year: 1999,
        reviews: 15,
        average: 62
      }),
      new Album({
        name: 'No Leaf Clover',
        albumType: 'Single',
        year: 2000,
        reviews: 1,
        average: 56
      }),
      new Album({
        name: 'I Disappear',
        albumType: 'Single',
        year: 2000,
        reviews: 5,
        average: 36
      }),
      new Album({
        name: 'Classic Albums: Metallica',
        albumType: 'Video',
        year: 2001,
        reviews: 4,
        average: 83
      }),
      new Album({
        name: 'St. Anger',
        albumType: 'Full-length',
        year: 2003,
        reviews: 28,
        average: 46
      }),
      new Album({
        name: 'St. Anger',
        albumType: 'Single',
        year: 2003,
        reviews: 10,
        average: 49
      }),
      new Album({
        name: 'Frantic',
        albumType: 'Single',
        year: 2003,
        reviews: 4,
        average: 44
      }),
      new Album({
        name: 'The Unnamed Feeling',
        albumType: 'Single',
        year: 2004,
        reviews: 2,
        average: 55
      }),
      new Album({
        name: 'Some Kind of Monster',
        albumType: 'Single',
        year: 2004,
        reviews: 3,
        average: 45
      }),
      new Album({
        name: 'Vinyl Box Set',
        albumType: 'Boxed set',
        year: 2004
      }),
      new Album({
        name: 'The Videos 1989-2004',
        albumType: 'Video',
        year: 2006,
        reviews: 2,
        average: 73
      }),
      new Album({
        name: 'Live Earth',
        albumType: 'Live album',
        year: 2007,
        reviews: 2,
        average: 23
      }),
      new Album({
        name: 'The Day That Never Comes',
        albumType: 'Single',
        year: 2008,
        reviews: 18,
        average: 64
      }),
      new Album({
        name: 'My Apocalypse',
        albumType: 'Single',
        year: 2008,
        reviews: 5,
        average: 62
      }),
      new Album({
        name: 'Cyanide',
        albumType: 'Single',
        year: 2008,
        reviews: 3,
        average: 38
      }),
      new Album({
        name: 'The Judas Kiss',
        albumType: 'Single',
        year: 2008,
        reviews: 3,
        average: 59
      }),
      new Album({
        name: 'Death Magnetic',
        albumType: 'Full-length',
        year: 2008,
        reviews: 29,
        average: 75
      }),
      new Album({
        name: 'All Nightmare Long',
        albumType: 'Single',
        year: 2008,
        reviews: 2,
        average: 93
      }),
      new Album({
        name: 'Broken, Beat & Scarred',
        albumType: 'Single',
        year: 2009
      }),
      new Album({
        name: 'The Metallica Collection',
        albumType: 'Boxed set',
        year: 2009
      }),
      new Album({
        name: 'Français pour une nuit',
        albumType: 'Live album',
        year: 2009,
        reviews: 1,
        average: 85
      }),
      new Album({
        name: 'Orgullo, pasión y gloria - Tres noches en la ciudad de México',
        albumType: 'Live album',
        year: 2009,
        reviews: 1,
        average: 85
      }),
      new Album({
        name: 'Frantic / Paranoid',
        albumType: 'Split',
        year: 2010
      }),
      new Album({
        name: 'Six Feet Down Under',
        albumType: 'Live album',
        year: 2010,
        reviews: 2,
        average: 58
      }),
      new Album({
        name: 'The Big 4: Live from Sofia, Bulgaria',
        albumType: 'Split video',
        year: 2010,
        reviews: 3,
        average: 89
      }),
      new Album({
        name: 'Six Feet Down Under Part II',
        albumType: 'Live album',
        year: 2010
      }),
      new Album({
        name: 'Live at Grimey\'s',
        albumType: 'Live album',
        year: 2010,
        reviews: 2,
        average: 70
      }),
      new Album({
        name: 'The View',
        albumType: 'Single',
        year: 2011,
        reviews: 5,
        average: 26
      }),
      new Album({
        name: 'Lulu',
        albumType: 'Collaboration',
        year: 2011,
        reviews: 19,
        average: 16
      }),
      new Album({
        name: 'Beyond Magnetic',
        albumType: 'EP',
        year: 2012,
        reviews: 4,
        average: 70
      }),
      new Album({
        name: 'The First 30 Years',
        albumType: 'Single',
        year: 2012
      }),
      new Album({
        name: 'Quebec Magnetic',
        albumType: 'Video',
        year: 2012
      }),
      new Album({
        name: 'Through the Never (Music from the Motion Picture)',
        albumType: 'Live album',
        year: 2013,
        reviews: 1,
        average: 78
      }),
      new Album({
        name: 'One (Awards Show Rehearsal Version)',
        albumType: 'Single',
        year: 2014
      }),
      new Album({
        name: 'Lords of Summer (First Pass Version)',
        albumType: 'Single',
        year: 2014,
        reviews: 9,
        average: 58
      }),
      new Album({
        name: 'Live Metallica: San Juan, Puerto Rico | October 26, 2016',
        albumType: 'Live album',
        year: 2016
      }),
      new Album({
        name: 'Fifth Member Exclusive Deluxe Box Set Sampler',
        albumType: 'Compilation',
        year: 2016
      }),
      new Album({
        name: 'Liberté, Égalité, Fraternité, Metallica!',
        albumType: 'Live album',
        year: 2016,
        reviews: 1,
        average: 80
      }),
      new Album({
        name: 'Live Metallica: Minneapolis, MN',
        albumType: 'Live album',
        year: 2016
      }),
      new Album({
        name: 'Hardwired',
        albumType: 'Single',
        year: 2016,
        reviews: 16,
        average: 60
      }),
      new Album({
        name: 'Live Metallica: Webster Hall in New York, NY',
        albumType: 'Live album',
        year: 2016
      }),
      new Album({
        name: 'Moth into Flame',
        albumType: 'Single',
        year: 2016,
        reviews: 1,
        average: 50
      }),
      new Album({
        name: 'Atlas, Rise!',
        albumType: 'Single',
        year: 2016,
        reviews: 3,
        average: 52
      }),
      new Album({
        name: 'Live Metallica: House of Vans in London, United Kingdom',
        albumType: 'Live album',
        year: 2016
      }),
      new Album({
        name: 'Hardwired... to Self-Destruct',
        albumType: 'Full-length',
        year: 2016,
        reviews: 34,
        average: 61
      }),
      new Album({
        name: 'Live Metallica: Seoul, South Korea - January 11, 2017',
        albumType: 'Live album',
        year: 2017
      }),
      new Album({
        name: 'Live Metallica: Shanghai, China - January 15, 2017',
        albumType: 'Live album',
        year: 2017
      })
    ];
  }

}
