import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<any> = []

  constructor() { }

  ngOnInit() {
    this.fillUsers()
  }

  private fillUsers() {
    this.users = [
      { rank: 1, name: 'artery', title: 'Metal demon', score: 226626 },
      { rank: 2, name: 'Tueur', title: 'Metal knight', score: 212402 },
      { rank: 3, name: 'Caliginosity', title: 'Metal lord', score: 186894 },
      { rank: 4, name: 'christkiller', title: 'Dishonourably Discharged', score: 169488 },
      { rank: 5, name: 'Alhadis', title: 'Metal lord', score: 157558 },
      { rank: 6, name: 'Diamhea', title: 'Metal knight', score: 143920 },
      { rank: 7, name: 'Doomsday', title: 'Metal lord', score: 136196 },
      { rank: 8, name: 'Azmodes', title: 'Metal God', score: 129062 },
      { rank: 9, name: 'Krister', title: 'Jensen	Metal knight', score: 113822 },
      { rank: 10, name: 'Stormrider', title: 'Metal knight', score: 111720 },
      { rank: 11, name: 'Antioch', title: 'Metal knight', score: 105257 },
      { rank: 12, name: '0th', title: 'Metal knight', score: 102770 },
      { rank: 13, name: 'PiotrB', title: 'Metal lord', score: 97599 },
      { rank: 14, name: 'Sodomatic_Slaughter', title: 'Metal demon', score: 93011 },
      { rank: 15, name: 'Defreasis', title: 'Metal demon', score: 84868 }
    ]
  }

}
