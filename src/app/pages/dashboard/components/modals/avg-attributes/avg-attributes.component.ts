import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-avg-attributes",
  templateUrl: "./avg-attributes.component.html",
  styleUrls: ["./avg-attributes.component.scss"]
})
export class AvgAttributesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
