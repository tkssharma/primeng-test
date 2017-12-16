import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ReportData} from './model';

@Injectable()
export class ReportDataService {

      public reportDataTab1 : ReportData[] = [{
        "ISP" : "ISS PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>100)"
    },{
        "ISP" : "BHEL  PVT LTD",
        "FNN" : "N78077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "1144",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>30)",
        "LAST_MONTH" :"0(0=>200)"
    },{
        "ISP" : "ION  PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>300)"
    },{
        "ISP" : "ACN  PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>400)"
    },{
        "ISP" : "POINT PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "877",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>90)",
        "LAST_MONTH" :"0(0=>50)"
    },{
        "ISP" : "POI PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>300)"
    },{
        "ISP" : "MEDIA PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>400)"
    },{
        "ISP" : "MCSN PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "877",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>90)",
        "LAST_MONTH" :"0(0=>50)"
    }];


    public reportDataTab2 : ReportData[] = [{
        "ISP" : "YAHOO PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "444",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>100)"
    },{
        "ISP" : "AONI  PVT LTD",
        "FNN" : "N78077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "234",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>30)",
        "LAST_MONTH" :"0(0=>200)"
    },{
        "ISP" : "ION  PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>566)"
    },{
        "ISP" : "IBN  PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>432)"
    },{
        "ISP" : "CNN PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "877",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>90)",
        "LAST_MONTH" :"0(0=>50)"
    },{
        "ISP" : "GOI PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>300)"
    },{
        "ISP" : "GAAR PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "5532",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>80)",
        "LAST_MONTH" :"0(0=>400)"
    },{
        "ISP" : "MSN PVT LTD",
        "FNN" : "N20077K",
        "HOURLY_PEAK" : "0",
        "NETWORK_SIO": "877",
        "SIO_SPEED" : "0",
        "CURRENT_MONTH" : "0(0=>90)",
        "LAST_MONTH" :"0(0=>50)"
    }];


    constructor(private http: Http) {}

    ReportDataServiceTab1() {
      /*  return this.http.get('/api call')
                    .toPromise()
                    .then(res => <ReportData[]> res.json().data)
                    .then(data => { return data; });
      */
      return new Promise((resolve,reject)=>{
          resolve(this.reportDataTab1);
      })

    }
    ReportDataServiceTab2() {
        /*  return this.http.get('/api call')
                      .toPromise()
                      .then(res => <ReportData[]> res.json().data)
                      .then(data => { return data; });
        */
        return new Promise((resolve,reject)=>{
            resolve(this.reportDataTab2);
        })
  
      }
}


