import { Component } from '@angular/core';
import { HeaderAndInfo } from 'src/app/shared/models/headerAndnfo';

@Component({
  selector: 'app-dmr-two-way-radios',
  templateUrl: './dmr-two-way-radios.component.html',
  styleUrls: ['./dmr-two-way-radios.component.scss']
})
export class DmrTwoWayRadiosComponent {

  imageContent: HeaderAndInfo = {
    header: 'DMR Two-way Radios',
    headerExplanationPara: 'The right place to look for a one-stop DMR communications solution',
    showWatchVideoButton: true
  }

  textContent0: HeaderAndInfo = {
    header: 'Saikia DMR Two-way Radios',
    headerExplanationPara: `DMR, Digital Mobile Radio, is a digital radio standard by ETSI, European
    Telecommunications Standards
    Institute, and was first ratified in 2005. Saikia, an advocate of open standards, has been serving the
    global market for over a decade with a versatile and evolving DMR portfolio, including devices,
    infrastructure, and software. Professional users from public safety, government institutions,
    industries,
    and businesses have benefited from Saikia's innovation in their daily work and at critical moments.`
  }

  textContent1: HeaderAndInfo = {
    header: 'Easy To Use',
    headerExplanationPara: `From the BP series to the latest H-Series, Saikia DMR two-way radios
    are designed with users and real-life challenges in mind. The ergonomic ID and friendly UI make it
    easy and comfortable to use.`,
    showLearnMoreButton: true
  }

  textContent2: HeaderAndInfo = {
    header: 'Versatile and Robust ',
    headerExplanationPara: `Saikia DMR two-way radios are widely recognized for their rich features and ruggedness. Different
    sectors have different requirements for radio’s functionality and durability; Saikia offers multiple
    series to enable efficient team communications across scenarios.`,
    showLearnMoreButton: true
  }

}
