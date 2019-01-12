import { Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  public dropdownMenu: ElementRef;

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.toggleDropDownMenu();

  }

  @HostListener('document:click', ['$event.target']) onDocumentClick(target: any) {
    if (this.isOpen && !this.elRef.nativeElement.contains(target)) {
      this.isOpen = false;
      this.toggleDropDownMenu();
    }
  }

  private toggleDropDownMenu() {
    this.dropdownMenu = this.elRef.nativeElement.querySelectorAll('.dropdown-menu')[0];
    if (this.isOpen) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

}
