import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isSmallViewPort: boolean=true;
  isOpen=false;

  toggle(){
    this.isOpen=!this.isOpen;
  }

  ngOnInit(): void {
    this.checkViewportWidth();
  }

  private checkViewportWidth(): void {
    this.isSmallViewPort = window.innerWidth < 900;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.isSmallViewPort = window.innerWidth < 900;
  }

}
