import { Component, OnInit, AfterContentInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StartupHelpComponent } from "../startup-help/startup-help.component";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, AfterContentInit {
	constructor(private modalService: NgbModal) {}

	ngOnInit() {}

	ngAfterContentInit() {
		if (!localStorage.getItem("firstHelp")) {
			setTimeout(() => {
				this.openHelp();
			}, 500);
		}
	}

	openHelp() {
		localStorage.setItem("firstHelp", "true");
		this.modalService.open(StartupHelpComponent, {
			centered: true,
			size: "lg"
		});
	}
}
