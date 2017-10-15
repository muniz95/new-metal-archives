import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels-country',
  templateUrl: './labels-country.component.html',
  styleUrls: ['./labels-country.component.css']
})
export class LabelsCountryComponent implements OnInit {

  countries: Array<any>
  selectedCountry: any;
  labelsByCountry: Array<any>

  constructor() { }

  ngOnInit() {
    this.fillCountries()
  }

  searchLabels(country: object) {
    console.log(country)
    this.selectedCountry = country
    this.labelsByCountry = [
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
  }

  showCountryList() {
    this.selectedCountry = undefined
  }

  fillCountries() {
    this.countries = [
      { name: 'Afghanistan' },
      { name: 'Åland Islands' },
      { name: 'Albania' },
      { name: 'Algeria' },
      { name: 'Andorra' },
      { name: 'Angola' },
      { name: 'Argentina' },
      { name: 'Armenia' },
      { name: 'Aruba' },
      { name: 'Australia' },
      { name: 'Austria' },
      { name: 'Azerbaijan' },
      { name: 'Bahrain' },
      { name: 'Bangladesh' },
      { name: 'Barbados' },
      { name: 'Belarus' },
      { name: 'Belgium' },
      { name: 'Belize' },
      { name: 'Bolivia' },
      { name: 'Bosnia and Herzegovina' },
      { name: 'Botswana' },
      { name: 'Brazil' },
      { name: 'Brunei' },
      { name: 'Bulgaria' },
      { name: 'Cambodia' },
      { name: 'Canada' },
      { name: 'Chile' },
      { name: 'China' },
      { name: 'Colombia' },
      { name: 'Costa Rica' },
      { name: 'Croatia' },
      { name: 'Cuba' },
      { name: 'Curaçao' },
      { name: 'Cyprus' },
      { name: 'Czech Republic' },
      { name: 'Denmark' },
      { name: 'Dominican Republic' },
      { name: 'Ecuador' },
      { name: 'Egypt' },
      { name: 'El Salvador' },
      { name: 'Estonia' },
      { name: 'Ethiopia' },
      { name: 'Faroe Islands' },
      { name: 'Finland' },
      { name: 'France' },
      { name: 'French Polynesia' },
      { name: 'Georgia' },
      { name: 'Germany' },
      { name: 'Gibraltar' },
      { name: 'Greece' },
      { name: 'Greenland' },
      { name: 'Guam' },
      { name: 'Guatemala' },
      { name: 'Guernsey' },
      { name: 'Guyana' },
      { name: 'Honduras' },
      { name: 'Hungary' },
      { name: 'Iceland' },
      { name: 'India' },
      { name: 'Indonesia' },
      { name: 'International' },
      { name: 'Iran' },
      { name: 'Iraq' },
      { name: 'Ireland' },
      { name: 'Isle of Man' },
      { name: 'Israel' },
      { name: 'Italy' },
      { name: 'Jamaica' },
      { name: 'Japan' },
      { name: 'Jersey' },
      { name: 'Jordan' },
      { name: 'Kazakhstan' },
      { name: 'Kenya' },
      { name: 'Korea, South' },
      { name: 'Kuwait' },
      { name: 'Kyrgyzstan' },
      { name: 'Laos' },
      { name: 'Latvia' },
      { name: 'Lebanon' },
      { name: 'Libya' },
      { name: 'Liechtenstein' },
      { name: 'Lithuania' },
      { name: 'Luxembourg' },
      { name: 'Macedonia (FYROM)' },
      { name: 'Madagascar' },
      { name: 'Malaysia' },
      { name: 'Maldives' },
      { name: 'Malta' },
      { name: 'Mauritius' },
      { name: 'Mexico' },
      { name: 'Moldova' },
      { name: 'Monaco' },
      { name: 'Mongolia' },
      { name: 'Montenegro' },
      { name: 'Morocco' },
      { name: 'Mozambique' },
      { name: 'Myanmar' },
      { name: 'Namibia' },
      { name: 'Nepal' },
      { name: 'Netherlands' },
      { name: 'New Caledonia' },
      { name: 'New Zealand' },
      { name: 'Nicaragua' },
      { name: 'Norway' },
      { name: 'Oman' },
      { name: 'Pakistan' },
      { name: 'Panama' },
      { name: 'Paraguay' },
      { name: 'Peru' },
      { name: 'Philippines' },
      { name: 'Poland' },
      { name: 'Portugal' },
      { name: 'Puerto Rico' },
      { name: 'Qatar' },
      { name: 'Reunion' },
      { name: 'Romania' },
      { name: 'Russia' },
      { name: 'San Marino' },
      { name: 'Saudi Arabia' },
      { name: 'Serbia' },
      { name: 'Singapore' },
      { name: 'Slovakia' },
      { name: 'Slovenia' },
      { name: 'South Africa' },
      { name: 'Spain' },
      { name: 'Sri Lanka' },
      { name: 'Suriname' },
      { name: 'Svalbard' },
      { name: 'Sweden' },
      { name: 'Switzerland' },
      { name: 'Syria' },
      { name: 'Taiwan' },
      { name: 'Tajikistan' },
      { name: 'Thailand' },
      { name: 'Trinidad and Tobago' },
      { name: 'Tunisia' },
      { name: 'Turkey' },
      { name: 'Turkmenistan' },
      { name: 'Uganda' },
      { name: 'Ukraine' },
      { name: 'United Arab Emirates' },
      { name: 'United Kingdom' },
      { name: 'United States' },
      { name: 'Unknown' },
      { name: 'Uruguay' },
      { name: 'Uzbekistan' },
      { name: 'Venezuela' },
      { name: 'Vietnam' },
      { name: 'Zambia' }
    ]
  }

}