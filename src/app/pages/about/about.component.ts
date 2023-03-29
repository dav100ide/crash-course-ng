import { Component } from '@angular/core';
//import social icons from fontawesoe
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
   selector: 'app-about',
   templateUrl: './about.component.html',
   styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
   faInstagram = faInstagram;
   faLinkedin = faLinkedin;
   faFacebook = faFacebook;
}
