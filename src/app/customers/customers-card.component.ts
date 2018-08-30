import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

@Component({
  selector: 'cm-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: [ './customers-card.component.css' ],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersCardComponent implements OnInit {

  @Input() customers: ICustomer[] = [];

  constructor(public trackbyService: TrackByService) { }

  ngOnInit() {

  }

}

