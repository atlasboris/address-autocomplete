import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements OnInit {
  @Input() rows: Address[] = [];
  @Output() deleteRow: EventEmitter<Address> = new EventEmitter<Address>();
  constructor() { }

  ngOnInit(): void { }

  onDelete(address:Address){
    this.deleteRow.emit(address);
  }
}

export interface Address {
  street?: string,
  number?: number,
  city?: string,
  zip?: string,
  country?: string,
  typeOfAddress: string,
  formattedAddress: string
}