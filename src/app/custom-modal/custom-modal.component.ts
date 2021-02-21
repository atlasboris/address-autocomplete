import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Input() action:string
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();
  @HostListener('click', ['$event']) bgClick(eventData: Event) {
    if ((eventData?.target as Element)?.className === "modal-bg") {
      this.onClose.emit();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onClose.emit();
  }
  confirm() {
    this.onConfirm.emit();
  }

}
