import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompBComponent implements OnInit {

  constructor(public counterService:CounterService) { }

  ngOnInit(): void {
  }

}
