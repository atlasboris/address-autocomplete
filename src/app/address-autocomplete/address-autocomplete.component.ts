/// <reference types="@types/googlemaps" />

import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-address-autocomplete',
  templateUrl: './address-autocomplete.component.html',
  styleUrls: ['./address-autocomplete.component.scss']
})
export class AddressAutocompleteComponent {
  @Output() selectAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addressInputRef') addressInputRef: ElementRef;

  constructor(private ref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    let autocomplete = new google.maps.places.Autocomplete(this.addressInputRef.nativeElement);
    autocomplete.setFields(['address_component', 'types', 'formatted_address']);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
      this.selectAddress.emit(place);
      this.ref.detectChanges();
      this.addressInputRef.nativeElement.value ='';
    });
  }


}
