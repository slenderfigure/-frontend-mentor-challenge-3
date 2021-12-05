import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NAVIGATION_LINKS } from '../../config/navigation-links.config';
import { MobilemenuService } from '../../services/mobilemenu.service';

@Component({
  selector: 'bank-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss']
})
export class MobilemenuComponent implements OnInit, AfterViewInit {
  @ViewChild('mobilemenu', { static: false }) mobilemenu!: ElementRef<HTMLElement>;
  navlinks = NAVIGATION_LINKS;
  showMenu = false;

  constructor(private menuService: MobilemenuService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.menuService.menuOpenState$.subscribe({
      next: state => this.toggleMenu(state)
    });
  }

  private toggleMenu(state: boolean): void {
    (!state) ? this.closeMenu() : this.openMenu();
  }
  
  private openMenu(): void {
    this.showMenu = true;
    document.body.setAttribute('active-menu', '');
  }

  private closeMenu(): void {
    this.mobilemenu?.nativeElement?.setAttribute('close-menu', '');
    document.body.removeAttribute('active-menu');
  }

  @HostListener('window:click', [ '$event'])
  clickedOutside(e: MouseEvent): void {
    if (!this.showMenu) return;

    const target = <HTMLElement>e.target;
    
    if (target !== this.mobilemenu.nativeElement) {
      this.menuService.toggleMenu(false);
    }    
  }

  @HostListener('window:keyup', [ '$event'])
  EscapeKeyPressed(e: KeyboardEvent): void {
    if (!this.showMenu || e.key !== 'Escape') return;

    this.menuService.toggleMenu(false);
  }

  @HostListener('animationend', ['$event']) 
  onAnimationEnd(e: AnimationEvent): void {
    if (e.animationName !== 'slideUp') return;
    
    this.showMenu = false;
  }

}
