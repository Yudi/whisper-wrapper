import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { open } from "@tauri-apps/plugin-shell";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatButtonModule, MatIconModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  async openRepository() {
    await open("https://github.com/tauri-apps/tauri");
  }
  async openLicenses() {
    await open("https://github.com/tauri-apps/tauri");
  }
}
