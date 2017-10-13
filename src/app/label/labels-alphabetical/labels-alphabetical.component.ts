import { Component, OnInit } from '@angular/core';

const LABELS = [
  { name: 'Label 1', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true },
  { name: 'Label 2', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: false },
  { name: 'Label 3', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true },
  { name: 'Label 4', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: false },
  { name: 'Label 5', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true },
  { name: 'Label 6', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true },
  { name: 'Label 7', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true },
  { name: 'Label 8', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: false },
  { name: 'Label 9', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: false },
  { name: 'Label 10', specialisation: 'Metal', status: 'active', country: 'Brazil', website: '', shopping: true }
]

@Component({
  selector: 'app-labels-alphabetical',
  templateUrl: './labels-alphabetical.component.html',
  styleUrls: ['./labels-alphabetical.component.css']
})
export class LabelsAlphabeticalComponent implements OnInit {

  labels: Array<any>

  constructor() { }

  ngOnInit() {
  }

  fetchLabels(letter: string) {
    // const labels = LABELS.filter(label => label.name.toLowerCase().startsWith(letter.toLowerCase()))
    // this.labels = labels
    this.labels = LABELS
  }

}
