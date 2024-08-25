import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'om-scrollbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-scrollbar.component.html",
  styleUrl: "./ngx-scrollbar.component.scss",
})
export class NgxScrollbarComponent implements AfterViewInit {
  @ViewChild('OmScrollbarContainer') sidebarRef!: ElementRef<HTMLElement>;
  @ViewChild('OmScrollbarWrapper') wrapperRef!: ElementRef<HTMLElement>;
  @ViewChild('OmScrollbarContent') contentRef!: ElementRef<HTMLElement>;
  @ViewChild('OmScrollbar') scrollbarRef!: ElementRef<HTMLElement>;

  @Input('styleClass')
  styleClass?: string;

  style: any = {};

  private scrollPercent = 0;
  mouseDown = false;
  private lastY?: number;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('om-scrollbar-bar')) {
      event.preventDefault();
      this.mouseDown = true;
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.lastY = undefined;
    this.mouseDown = false;
  }

  ngAfterViewInit(): void {
    window.addEventListener('mouseup', () => {
      this.lastY = undefined;
      this.mouseDown = false;
    });
    window.addEventListener('mousemove', (event) => this.onDrag(event));

    this.calcScrollbar();
  }

  calcScrollbar(): void {
    const sideBarHeight = this.sidebarRef.nativeElement.clientHeight;
    const contentHeight = this.contentRef.nativeElement.clientHeight;
    const scrollBarHeight = Math.floor(sideBarHeight / contentHeight * 100);

    this.style['--om-scrollbar-height'] = `${scrollBarHeight}%`;
  }

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    const contentHeight = this.contentRef.nativeElement.clientHeight;
    const scrollTop = target.scrollTop;

    this.scrollPercent = Math.floor(scrollTop / contentHeight * 100);

    this.style['--om-scrollbar-top'] = `${this.scrollPercent}%`;
  }

  onDrag(event: MouseEvent): void {
    if (!this.mouseDown) {
      return;
    }

    event.preventDefault();

    const offsetY = event.clientY;

    const scrollPx = offsetY - (this.lastY ?? offsetY);
    this.lastY = offsetY;

    const contentHeight = this.sidebarRef.nativeElement.clientHeight;
    const scrollPercent = (scrollPx) / (contentHeight);

    const scrollContentPx = this.contentRef.nativeElement.clientHeight * scrollPercent;

    this.wrapperRef.nativeElement.scrollBy(0, scrollContentPx);
  }
}
