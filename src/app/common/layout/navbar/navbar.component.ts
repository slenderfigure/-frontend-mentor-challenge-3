import { Component, OnInit } from '@angular/core';
import { NAVIGATION_LINKS } from '../../config/navigation-links.config';
import { MobilemenuService } from '../../services/mobilemenu.service';

@Component({
  selector: 'bank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navlinks = NAVIGATION_LINKS;
  showMenu = false;

  constructor(private menuService: MobilemenuService) { }

  ngOnInit(): void {
    this.menuService.menuOpenState$.subscribe({
      next: state => this.showMenu = state
    });
  }

  toggleMenu(e: MouseEvent): void {
    e.stopPropagation();
    
    this.showMenu = !this.showMenu;
    this.menuService.toggleMenu(this.showMenu);
  }
}
