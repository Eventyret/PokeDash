import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-list-help",
  templateUrl: "./list-help.component.html",
  styleUrls: ["./list-help.component.scss"]
})
export class ListHelpComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
