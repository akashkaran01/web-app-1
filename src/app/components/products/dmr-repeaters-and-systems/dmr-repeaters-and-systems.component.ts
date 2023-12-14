import { Component } from '@angular/core';
import { HeaderAndInfo } from 'src/app/shared/models/headerAndnfo';

@Component({
  selector: 'app-dmr-repeaters-and-systems',
  templateUrl: './dmr-repeaters-and-systems.component.html',
  styleUrls: ['./dmr-repeaters-and-systems.component.scss']
})
export class DmrRepeatersAndSystemsComponent {

  imageContent: HeaderAndInfo = {
    header: 'DMR Repeaters & Systems',
    headerExplanationPara: 'Digital Mobile Radio Conventional & Trunking',
    showWatchVideoButton: true
  }

  textContent0: HeaderAndInfo = {
    header: 'Saikia DMR Repeaters & Systems',
    headerExplanationPara: `Saikia DMR systems, compliant with ETSI DMR open standards, represent an industry-leading PMR infrastructure portfolio, including DMR Tier II conventional repeaters, repeater-based systems, and DMR Tier III trunking systems. With professional voice and data services as well as abundant applications, Saikia DMR systems bring business critical and mission critical users a powerful combination of versatility, flexibility, and reliability.`
  }

  textContent1: HeaderAndInfo = {
    header: 'What is Digital Trunking?',
    headerExplanationPara: `Trunking Radio systems are two-way radio systems that optimise voice call or data traffic through a limited number of frequencies, maximising the available resource for a large group of users. This is critical to ensure that communication is always instant and available for professional or enterprise level users, for example, within the public safety, manufacturing and transportation industry.`,
  }

  textContent2: HeaderAndInfo = {
    header: 'DMR Tier III',
    headerExplanationPara: `The DMR Tier III trunking communications technology has been widely adopted across the world in sectors, such as public safety, utility, oil & gas, and transportation. It is versatile enough to offer local coverage as well as large region coverage. The system is highly scalable to fulfill the requirements of users in the different phases of their growth. As per the customer's detailed requirements, such as daily communications, integrated command & control, positioning, and dispatching, Saikia is well known for its capability and experience in maximizing the potential of the technology and presenting value-added DMR solutions with abundant productivity and security features.`,
  }

  textContent3: HeaderAndInfo = {
    header: 'XPT Extended Pseudo Trunking system',
    headerExplanationPara: `The Extended Pseudo Trunking (XPT) is an expandable DMR system based on proven repeater technology. This system is developed to replicate a distributed trunking radio system without a centralized controller. It upgrades the repeaters to manage the available frequencies across multiple slots to fully utilize the available spectrum resource. XPT is available as single or multi-site. This scalable solution enables enterprises with DMR conventional systems to have extra system capacity without extra investment in frequency leasing; it expands both system coverage and capacity, resulting in enhanced efficiency and productivity.`,
  }

}
