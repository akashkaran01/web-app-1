import { Component } from '@angular/core';
import { HeaderAndInfo } from 'src/app/shared/models/headerAndnfo';

@Component({
  selector: 'app-tetra-radios',
  templateUrl: './tetra-radios.component.html',
  styleUrls: ['./tetra-radios.component.scss']
})
export class TetraRadiosComponent {

  imageContent: HeaderAndInfo = {
    header: 'TETRA Radio',
    headerExplanationPara: 'TETRA, or Terrestrial Trunked Radio is a professional mobile communication system based on time-division multiple access (TDMA) technology, which is designed and developed by ETSI (European Telecommunications Standards Institute).'
  }

  textContent0: HeaderAndInfo = {
    header: 'Operational Convenience with Flexible Performance',
    headerExplanationPara: `When you need mission-critical communications that never let you down, trust Saikia, one of the leading providers of TETRA radios in the world. Our TETRA radios have been built with the end user in mind. No matter you need a portable or a mobile radio, or you work in heavy duty or covert environment, or you need intrinsically safe or tamper proof options, we will always equip you with the right device delivering excellent audio quality, exceptional robustness, and ultra-reliable security, to help you coordinate the moments that matter most.`
  }

  textContent1: HeaderAndInfo = {
    header: 'Advanced TETRA Communication Technology',
    headerExplanationPara: `Based on years of TETRA products' research, development, and project experience, Saikia is customer-centric and continuously propagates technological innovation centered on customer value, and strives to supply customers with the best communication equipment and the highest quality communication services.`,
  }

  textContent2: HeaderAndInfo = {
    header: 'Professional Customized Design',
    headerExplanationPara: `Saikia relies on years of TETRA communication industry experience and insight into the traits of different industries to launch different products and solutions, provide professional customized communication solutions for different customers, and effectively solve customers' communication needs.`,
  }

  textContent3: HeaderAndInfo = {
    header: 'Complete Security Solutions',
    headerExplanationPara: `Saikia provides a variety of security encryption technologies and end-to-end security solutions to provide customers with the highest level of security communication guarantee to ensure customers' communication security and data security.`,
  }
}
