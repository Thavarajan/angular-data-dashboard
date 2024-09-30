import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { GoogleChartService } from "../service/google-chart.service";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent implements OnInit {
  private gLib: any;

  @Input()
  public data: any[] = [];



  constructor(private gChartService: GoogleChartService, private elRef: ElementRef) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart", "table"] });

  }

  ngOnInit() {
    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));


  }

  private drawChart() {
    const chart = new this.gLib.visualization.PieChart(
      this.elRef.nativeElement
    );
    console.log(this.data);
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Accessories");
    data.addColumn("number", "Quantity");
    this.data.forEach((element: any) => {
      data.addRow([element.Accessories, element.Quantity])
    });


    const options = { title: "Sales Info" };

    chart.draw(data, options);
  }
}
