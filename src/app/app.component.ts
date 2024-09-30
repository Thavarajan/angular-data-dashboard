import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [`.header{
    text-align: center;
    margin: 20px;
    font-family: serif;
  }`],
})
export class AppComponent {
  title = "angular-data-dashboard";
  pies = [
    {
      data: [
        { 'Accessories': 'Computers', 'Quantity': 6 },
        { 'Accessories': 'Hard Drives', 'Quantity': 3 },
        { 'Accessories': 'Printers', 'Quantity': 4 },
        { 'Accessories': 'Monitors', 'Quantity': 5 },
        { 'Accessories': 'RAM', 'Quantity': 1 },
      ]
    },
    {
      data: [
        { 'Accessories': 'Pooja Room', 'Quantity': 6 },
        { 'Accessories': 'Bed Room', 'Quantity': 3 },
        { 'Accessories': 'Kitchen', 'Quantity': 4 },
        { 'Accessories': 'Rooms', 'Quantity': 5 },
        { 'Accessories': 'Halls', 'Quantity': 1 },
      ]
    }
  ];
}
