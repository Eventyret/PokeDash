import { Component, OnInit } from "@angular/core";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
	public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
