import { Component } from '@angular/core';
import { HeaderAndInfo } from 'src/app/shared/models/headerAndnfo';

@Component({
  selector: 'app-tera-systems',
  templateUrl: './tera-systems.component.html',
  styleUrls: ['./tera-systems.component.scss'],
})
export class TeraSystemsComponent {
  imageContent: HeaderAndInfo = {
    header: 'TETRA System',
    headerExplanationPara: 'MISSION-CRITICAL COMMUNICATIONS',
  };

  textContent0: HeaderAndInfo = {
    header: 'TETRA System',
    headerExplanationPara: `Hytera's TETRA System provide powerful reliability when you need it most, and our radios offer an expansive feature list compliant with the ETSI TETRA open standard, managed through our impressive applications. Discover how we can provide your TETRA infrastructure today to deliver mission-critical communications.`,
  };

  textContent1: HeaderAndInfo = {
    header: 'Secure and Resilient',
    headerExplanationPara: `TETRA encryption (E2EE and AIE) and authentication, combined with excellent voice quality thanks to digital TETRA technology, ensures every communication is transmitted clearly and securely. Intelligent redundancy functions provides maximum system reliability.`,
  };

  textContent2: HeaderAndInfo = {
    header: 'TETRA System Scalability',
    headerExplanationPara: `Hytera TETRA ACCESSNET®&#174;-T IP can be scaled to grow in line with your user demands, from single-cell systems to nationwide networks.`,
  };

  textContent3: HeaderAndInfo = {
    header: 'Utilise Existing IP Infrastructure',
    headerExplanationPara: `The IP-based connectivity of the individual network elements allows you to use existing IP infrastructure, which makes extra transmission links superfluous and saves on cost. Make use of high-grade IP networks for voice communication that may already exist at many sites.`,
  };

  textContent4: HeaderAndInfo = {
    header: 'Network Architecture Designed for Flexibility',
    headerExplanationPara: `Centralized or decentralized network topologies offer flexibility in your network design and adaptation, while the flexible distribution of gateways is possible across all nodes, ensuring the system is configured to your individual requirements.`,
  };

}
