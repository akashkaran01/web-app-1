import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  allFootersData = [
    {
      footerHeading: 'About Saikia',
      subFooters: ['Saikia Profile', 'Saikia Showroom', 'Saikia Offices']
    },
    {
      footerHeading: 'Technology Partners',
      subFooters: ['Find a Dealer', 'Become a Saikia Partner', 'Partner Portal']
    },
    {
      footerHeading: 'Support',
      subFooters: ['Service Products', 'Service Solutions', 'Download Center', 'Training Courses', 'Certification Lookup', 'Declaration Documents', 'Webinar Replay']
    },
  ]

}
