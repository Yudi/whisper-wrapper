import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-main",
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {
  readonly availableLanguages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "Inglês" },
    { code: "es", name: "Espanhol" },
    { code: "fr", name: "Francês" },
    { code: "jp", name: "Japonês" },
  ];

  mainForm = new FormGroup({
    inputFile: new FormControl({ value: "", disabled: true }),
    outputFile: new FormControl({ value: "", disabled: true }),
    parseLanguage: new FormControl("pt"),
  });
}
