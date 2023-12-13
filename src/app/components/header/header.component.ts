import { Component } from '@angular/core';
import * as HeadersInfo from '../../shared/models/values/header-values'
import { Header, SubHeader } from 'src/app/shared/models/headers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  allHeaders!: Header[];

  constructor(private router: Router) {
    this.allHeaders = HeadersInfo.headersData
  }

  // It show header's subheaders 
  showHeaderContent(headerToBeShown: Header) {
    // Before showing header's all subheaders, it first hides any already displaying header.
    this.allHeaders.forEach((header: Header) => {
      if (header.show === true) {
        // Hiding already shown header
        header.show = false;
      }
    })
    // Showing the header to be shown.
    headerToBeShown.show = true;
  }

  hideHeaderContent() {
    this.allHeaders.forEach((header: Header) => {
      if (header.show === true) {
        header.show = false;
      }
    })
  }

  showSubHeaderContent(header: Header, subHeader: SubHeader) {
    subHeader.showSubHeaderContent = true;
    header.subHeaders.forEach((subHdr: SubHeader) => {
      if (subHdr.showSubHeaderContent === true && subHdr.name !== subHeader.name) {
        subHdr.showSubHeaderContent = false;
      }
    });
  }

  initiateRoute(routeTo: string) {
    if (routeTo == 'home') {
      this.router.navigateByUrl('home')
    } else if (routeTo === 'DMR Two-way Radios') {
      this.router.navigateByUrl('product-new/digital-radio/dmr-two-way-radios')
    } else if (routeTo === 'DMR Repeaters & Systems') {
      this.router.navigateByUrl('product-new/digital-radio/dmr-repeaters-and-systems')
    }
    this.hideHeaderContent();
  }

  openSaikia() {
    window.open('http://sai-kia.com/reachUs.html', '_blank');
  }
}
