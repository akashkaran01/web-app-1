import { Component } from '@angular/core';
import * as HeadersInfo from '../../shared/models/values/header-values'
import { Header, SubHeader } from 'src/app/shared/models/headers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  allHeaders : Header[] = HeadersInfo.headersData;

  // It show header's subheaders 
  showHeaderContent(headerToBeShown: Header){
    // Before showing header's all subheaders, it first hides any already displaying header.
    this.allHeaders.forEach((header:Header)=>{
      if(header.show === true){
        // Hiding already shown header
        header.show = false;
      }
    })
    // Showing the header to be shown.
    headerToBeShown.show = true;
  }

  hideHeaderContent(){
    this.allHeaders.forEach((header:Header)=>{
      if(header.show === true){
        header.show = false;
      }
    })
  }

  showSubHeaderContent(header:Header, subHeader: SubHeader){
    subHeader.showSubHeaderContent = true;
    header.subHeaders.forEach((subHdr:SubHeader) => {
      if(subHdr.showSubHeaderContent === true && subHdr.name !== subHeader.name){
        subHdr.showSubHeaderContent = false;
      }
    });
  }
}
