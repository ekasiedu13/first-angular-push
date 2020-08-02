import {Component, Input, OnInit} from '@angular/core';
import {DrugInterface} from '../../DrugInterface';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  @Input('init')
  drug: DrugInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

  showDrugDetails(): void {
    //change route or navigate to the drugs details page
    console.log('clicked id is:', this.drug.id);
  }
}
