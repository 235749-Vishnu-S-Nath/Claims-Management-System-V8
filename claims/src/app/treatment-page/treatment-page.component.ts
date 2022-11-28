import { Component, OnInit } from '@angular/core';
import { Specialist } from '../specialist';
import { SpecialistService } from '../specialist.service';
import { Treatment } from '../treatment';
import { TreatmentService } from '../treatment.service';

@Component({
  selector: 'app-treatment-page',
  templateUrl: './treatment-page.component.html',
  styleUrls: ['./treatment-page.component.css']
})
export class TreatmentPageComponent implements OnInit {

  constructor(private treatmentService:TreatmentService,private specialistService:SpecialistService) { 
  }
  treatments:Treatment[];
  specialists:Specialist[];
  ngOnInit() {
    this.treatmentService.findAll().subscribe(
      data => {this.treatments=data;}
    );
  }
  Change(event, id) {
    // console.log(event.target.id);
    this.specialistService.findAllById(event.target.id).subscribe(
      data => {this.specialists=data;}
    );
  }
}
