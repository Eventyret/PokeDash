import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-startup-help",
  templateUrl: "./startup-help.component.html",
  styleUrls: ["./startup-help.component.scss"]
})
export class StartupHelpComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
