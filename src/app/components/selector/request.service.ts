// tslint:disable

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RequestServce {
    public urlSources = [];
    public arr = [];
    public videoData = {};

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get('./assets/response.json');
    }

    onFetchData() {
        this.fetchData()
            .subscribe(data => {
                this.videoData = data['screens'];
                this.recurseData(this.videoData, this.getSrc);
            });
        console.log(this.urlSources);
        
    }

    getSrc(key: string, values: any) {
        if (key === 'url') {
            this.urlSources.push(values);
        }
    }

    recurseData(dataObject, helperFunction) {
        for (const item in dataObject) {
            helperFunction.apply(this, [item, dataObject[item]]);
            if (dataObject[item] !== null && typeof (dataObject[item]) === 'object') {
                this.recurseData(dataObject[item], helperFunction);
            }
        }
    }

    ngOnInit() {
        this.onFetchData();
    }
}
