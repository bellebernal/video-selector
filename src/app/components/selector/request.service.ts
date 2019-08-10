import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IResponse } from './response.model';
import { Key } from 'protractor';

@Injectable({providedIn: 'root'})
export class RequestServce {
    constructor(private http: HttpClient) {}

    fetchData() {
        return this.http
            .get('./app/content/response.json')
            .pipe(
                map((responseData: {[key: string]: IResponse}) => {
                    const dataArray: IResponse[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            dataArray.push({...responseData[key], id: key});
                        }
                    }
                    return dataArray;
                })
            );
    }
}
