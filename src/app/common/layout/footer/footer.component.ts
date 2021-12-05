import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FOOTER_LINKS, MEDIA_LINKS } from './config/footer-navigation-links.config';

@Component({
  selector: 'bank-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mediaLinks = MEDIA_LINKS;
  navlinks = FOOTER_LINKS;

  constructor(private sanitizer: DomSanitizer) { }

  getHTML(text: string | undefined) {
    return text && this.sanitizer.bypassSecurityTrustHtml(text);
  }

  ngOnInit(): void {
  }

}
