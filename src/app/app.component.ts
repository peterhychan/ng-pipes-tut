import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onNameChange(name: string) {
    this.name = name;
  }
  onDateChange(date: string) {
    this.date = date;
  }
  onAmountChange(amount: string) {
    this.amount = parseFloat(amount);
  }
}
