import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Address } from './address-table/address-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'address-autocomplete';
  museums: string[] = [
    'Solomon R. Guggenheim Museum',
    'Art Institute of Chicago',
    'Royal Ontario Museum'
  ]
  locations: Address[] = [];

  isPopupOpened: boolean = false;
  row: Address;

  constructor(private ref: ChangeDetectorRef) { }



  getAddress(place: object) {
    this.locations.push(this.getExactAddress(place));
    this.ref.detectChanges();
  }

  getExactAddress(place): Address {
    let address: Address = <Address>{};
    let googleAddressObj = place.address_components.reduce((prev, current) => {
      prev[current.types[0]] = current['long_name'];
      return prev;
    }, {});

    if (googleAddressObj.hasOwnProperty('route')) {
      address.street = googleAddressObj.route;
    }
    if (googleAddressObj.hasOwnProperty('street_number')) {
      address.number = googleAddressObj.street_number
    }
    if (googleAddressObj.hasOwnProperty('postal_code')) {
      address.zip = googleAddressObj.postal_code;
    }
    if (googleAddressObj.hasOwnProperty('country')) {
      address.country = googleAddressObj.country;
    }
    if (googleAddressObj.hasOwnProperty('locality')) {
      address.city = googleAddressObj.locality;
    }

    address.typeOfAddress = place.types[0];
    address.formattedAddress = place.formatted_address;
    return address;
  }

  deleteRow(address: Address) {
    this.isPopupOpened = true;
    this.row = { ...address };
    this.ref.detectChanges();
  }

  closePopup() {
    this.row = undefined;
    this.isPopupOpened = false;
    this.ref.detectChanges();

  }

  deleteAddress() {
    this.locations = this.locations.filter((location: Address) => {
      return (location.formattedAddress !== this.row.formattedAddress);
    });
    this.row = undefined;
    this.closePopup();
    this.ref.detectChanges();
  }
}
