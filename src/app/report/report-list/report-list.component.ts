import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  unassignedReports: Array < any > = []
  assignedReports: Array < any > = []
  resolvedReports: Array < any > = []

  constructor() {}

  ngOnInit() {
    this.fillReports()
  }

  private fillReports() {
    this.unassignedReports = [
      {
        type: 'Band',
        name: 'Judas Priest',
        category: 'Re-releases, other versions',
        reportedBy: 'Scissorman',
        date: '2017-04-14 01:57',
        lastUpdate: '2017-04-14 01:57'
      },
      {
        type: 'Band',
        name: 'Sanctifyre',
        category: 'Re-releases, other versions',
        reportedBy: 'Jymbo',
        date: '2017-05-02 00:41',
        lastUpdate: '2017-08-21 13:06'
      },
      {
        type: 'Band',
        name: 'Abhor',
        category: 'Lineup correction',
        reportedBy: 'Assassin LTD',
        date: '2017-05-02 12:10',
        lastUpdate: '2017-09-16 10:45'
      },
      {
        type: 'Album',
        name: 'The Return of the Northern Moon',
        category: 'General update / mistakes',
        reportedBy: 'TheOneWhoWaits',
        date: '2017-05-03 01:27',
        lastUpdate: '2017-06-28 10:21'
      },
      {
        type: 'Album',
        name: 'Puesto en marcha',
        category: 'Lineup correction',
        reportedBy: 'Lmerin',
        date: '2017-05-06 20:03',
        lastUpdate: '2017-05-06 20:03'
      }
    ]
    this.assignedReports = [
      {
        type: 'Band',
        name: 'Judas Priest',
        category: 'Re-releases, other versions',
        reportedBy: 'Scissorman',
        assignedTo: 'Scissorman',
        date: '2017-04-14 01:57',
        lastUpdate: '2017-04-14 01:57'
      },
      {
        type: 'Band',
        name: 'Sanctifyre',
        category: 'Re-releases, other versions',
        reportedBy: 'Jymbo',
        assignedTo: 'Jymbo',
        date: '2017-05-02 00:41',
        lastUpdate: '2017-08-21 13:06'
      },
      {
        type: 'Band',
        name: 'Abhor',
        category: 'Lineup correction',
        reportedBy: 'Assassin LTD',
        assignedTo: 'Assassin LTD',
        date: '2017-05-02 12:10',
        lastUpdate: '2017-09-16 10:45'
      },
      {
        type: 'Album',
        name: 'The Return of the Northern Moon',
        category: 'General update / mistakes',
        reportedBy: 'TheOneWhoWaits',
        assignedTo: 'TheOneWhoWaits',
        date: '2017-05-03 01:27',
        lastUpdate: '2017-06-28 10:21'
      },
      {
        type: 'Album',
        name: 'Puesto en marcha',
        category: 'Lineup correction',
        reportedBy: 'Lmerin',
        assignedTo: 'Lmerin',
        date: '2017-05-06 20:03',
        lastUpdate: '2017-05-06 20:03'
      }
    ]
    this.resolvedReports = [
      {
        type: 'Band',
        name: 'Judas Priest',
        category: 'Re-releases, other versions',
        reportedBy: 'Scissorman',
        assignedTo: 'Scissorman',
        date: '2017-04-14 01:57',
        lastUpdate: '2017-04-14 01:57'
      },
      {
        type: 'Band',
        name: 'Sanctifyre',
        category: 'Re-releases, other versions',
        reportedBy: 'Jymbo',
        assignedTo: 'Jymbo',
        date: '2017-05-02 00:41',
        lastUpdate: '2017-08-21 13:06'
      },
      {
        type: 'Band',
        name: 'Abhor',
        category: 'Lineup correction',
        reportedBy: 'Assassin LTD',
        assignedTo: 'Assassin LTD',
        date: '2017-05-02 12:10',
        lastUpdate: '2017-09-16 10:45'
      },
      {
        type: 'Album',
        name: 'The Return of the Northern Moon',
        category: 'General update / mistakes',
        reportedBy: 'TheOneWhoWaits',
        assignedTo: 'TheOneWhoWaits',
        date: '2017-05-03 01:27',
        lastUpdate: '2017-06-28 10:21'
      },
      {
        type: 'Album',
        name: 'Puesto en marcha',
        category: 'Lineup correction',
        reportedBy: 'Lmerin',
        assignedTo: 'Lmerin',
        date: '2017-05-06 20:03',
        lastUpdate: '2017-05-06 20:03'
      }
    ]
  }

}
