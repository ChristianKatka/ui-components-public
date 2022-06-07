import {
  AfterViewInit,
  Component,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar-hide',
  templateUrl: 'navbar-hide.component.html',
  styleUrls: ['navbar-hide.component.scss'],
})
export class NavbarHideComponent {
  @ViewChild('navbar') navbar!: any;
  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {
    this.hideTopNavigationBarOnScroll();
  }
  prevScrollpos = window.pageYOffset;

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;
  scroll(id: string) {
    this.trigger.closeMenu();
    const scrollSection = document.getElementById(id);
    scrollSection?.scrollIntoView({ behavior: 'smooth' });
  }

  hideTopNavigationBarOnScroll() {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.navbar.nativeElement.style.top = '0';
    } else {
      this.navbar.nativeElement.style.top = '-80px';
    }
    this.prevScrollpos = currentScrollPos;
  }
}
