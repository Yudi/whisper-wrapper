import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSliderModule } from "@angular/material/slider";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    ],
    templateUrl: "./settings.component.html",
    styleUrl: "./settings.component.css"
})
export class SettingsComponent {
  settingsForm = new FormGroup({
    outputFormat: new FormControl(""),
    parseLanguage: new FormControl(""),
    aiModel: new FormControl(""),
    workingDirectory: new FormControl(""),
    volumeGain: new FormControl(""),
  });
}
