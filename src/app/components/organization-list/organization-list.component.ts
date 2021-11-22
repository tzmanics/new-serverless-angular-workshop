import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'src/app/models/Organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css'],
})
export class OrganizationListComponent implements OnInit {
  @Input() organization: Organization = {
    id: '1',
    name: 'Organization Name',
    description: 'This will describe the organization.',
    url: 'https://this-site.org/organization-page',
    donationAmount: '10',
    body: 'This will tell more about the organization.',
    website: 'https://organization.org',
    twitter: 'https://twitter.com/organization',
    image: 'https://bit.ly/2ZdePYO',
  };
  constructor() {}

  ngOnInit(): void {}
}
