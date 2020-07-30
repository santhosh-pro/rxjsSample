import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompAComponent implements OnInit {

  constructor(public service: CounterService) { }

  ngOnInit(): void {
     this.service.getItems();
  }
  
}
