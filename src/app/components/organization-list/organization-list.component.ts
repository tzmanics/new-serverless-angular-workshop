import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

import { Organization } from 'src/app/models/Organization';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css'],
})
export class OrganizationListComponent implements OnInit {
  private response: any;

  @Input() organization: Organization = {
    name: 'Organization Name',
    website: 'https://organization.org',
    description: 'This will describe the organization.',
    donationAmount: '10',
    twitter: 'https://twitter.com/organization',
    image: 'https://bit.ly/2ZdePYO',
  };
  constructor(private http: HttpClient) {}

  async triggerCreateCheckout(eventOrganization: any) {
    this.response = await this.http
      .post('/.netlify/functions/createCheckout', eventOrganization, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .toPromise();
    this.openStripe(this.response);
  }

  openStripe = async (stripeParams: any) => {
    const stripe = await loadStripe(stripeParams.publishableKey);
    const { error } = await stripe!.redirectToCheckout({
      sessionId: stripeParams.sessionId,
    });
  };

  ngOnInit(): void {}
}
