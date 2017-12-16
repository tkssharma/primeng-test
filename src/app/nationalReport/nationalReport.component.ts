import {Component, OnInit} from '@angular/core';
import {ReportDataService} from '../report.service';
import {ReportData} from '../model';

@Component({selector: 'app-national-report', templateUrl: './nationalReport.component.html', styleUrls: ['./nationalReport.component.css']})

export class NationalReportComponent implements OnInit {

  _reportDataTab1 : any = [];
  _reportDataTab2 : any = [];
  _selectedReportDataTab2: any[];  
  loading : boolean;
  _selectedReportDataTab1: any[];
  _filename:string= 'ISP National APHT Report'+new Date().toString()
  
  getFileName(){
    return this._filename;
  }
  constructor(private _reportDataservice : ReportDataService) {}

  ngOnInit() {
    this.loading = true;    
    this
      ._reportDataservice
      .ReportDataServiceTab1()
      .then(_reportData => {
        setTimeout(()=> {
          this._reportDataTab1 = _reportData;
          this.loading = false;
        },2000)
      });

      this
      ._reportDataservice
      .ReportDataServiceTab2()
      .then(_reportData => {
        setTimeout(()=> {
          this._reportDataTab2 = _reportData;
          this.loading = false;
        },2000)
      });
  }

}
