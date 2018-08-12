import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StartupHelpComponent } from "../startup-help/startup-help.component";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openHelp() {
	  this.modalService.open(StartupHelpComponent, {
		  centered: true,
		  size: "lg"
	  });
  }

}
