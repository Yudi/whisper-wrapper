import { Component, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SettingsComponent } from "../settings/settings.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ProgressComponent } from "../../progress/progress.component";
import { AboutComponent } from "../../about/about.component";

@Component({
  selector: "app-toolbar",
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.css",
})
export class ToolbarComponent {
  readonly dialog = inject(MatDialog);

  openSettings(): void {
    const dialogRef = this.dialog.open(SettingsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  openAbout(): void {
    this.dialog.open(AboutComponent);
  }

  openProgress(): void {
    const dialogRef = this.dialog.open(ProgressComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
