import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convert"
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) {
      return "";
    }

    if (targetUnits == "km") {
      return value * 1.60934;
    } else if (targetUnits == "m") {
      return value * 1609.34;
    } else if (targetUnits == "cm") {
      return value * 1609340;
    } else {
      return new Error("Not Supported.");
    }
  }
}
