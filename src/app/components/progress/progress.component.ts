import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-progress",
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./progress.component.html",
  styleUrl: "./progress.component.css",
})
export class ProgressComponent {}
