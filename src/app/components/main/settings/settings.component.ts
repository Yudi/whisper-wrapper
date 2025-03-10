import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSliderModule } from "@angular/material/slider";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DecimalPipe } from "@angular/common";
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-settings",
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    DecimalPipe,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatDividerModule,
  ],
  templateUrl: "./settings.component.html",
  styleUrl: "./settings.component.css",
})
export class SettingsComponent {
  settingsForm = new FormGroup({
    appLanguage: new FormControl("pt"),
    outputFormat: new FormControl(""),
    aiModel: new FormControl(""),
    workingDirectory: new FormControl({ value: "", disabled: true }),
    volumeGain: new FormControl(1),
  });

  readonly availableOutputFormats = ["TXT", "SRT", "VTT", "LRC", "JSON", "JSON Full", "CSV"];

  readonly appLanguages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "Inglês" },
  ];
}
