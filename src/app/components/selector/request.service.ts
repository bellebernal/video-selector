// tslint:disable

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IResponse } from './files.model';
// import response from '../assets/response.json';

@Injectable({ providedIn: 'root' })
export class RequestService {
    public response: any = [];
    public videos: any = [];
    public selectorData: any = [];
    public videoData: any = [];
    public playerData: any = [];

    constructor(private http: HttpClient) {}

    // gets data and transforms from json into an array object
    fetchData() {
        return this.response = this.http
            .get<{[key: string]: IResponse }>('../assets/response.json')
            .pipe (
                map((responseData) => {
                    const iresponseArray: IResponse[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            iresponseArray.push({...responseData[key], id: key});
                        }
                    } 
                    console.log(iresponseArray);
                    return iresponseArray;
                })
            );
    }

 
    // fetchData() {
    //     return this.http.get('assets/response.json')
    //     .pipe (  // takes an observable operator, map -- begins our conversion of raw json data into an array object
    //         map((responseData: { [key:string]: any }) => {  // in this data, there is a key property that we are using as an index of which in angular, index annotations need an explicit type
    //             const responseArray = [];
    //             for (const key in responseData) {
    //                 if (responseData.hasOwnProperty(key)) {  // using our key to strictly target our data object and not the native proto object
    //                     responseArray.push({...responseData[key], id: key}); // push all (...) data properties additionial to our key data into an array
    //                     console.log(responseArray);
    //                 }
    //             }
    //         })  
    //     );
    // }

        // *TODO* : research interface for data binding or prop biniding??

    ngOnInit() {
        this.fetchData();
        // console.log(this.selectorData);
        // this.afterFetch();
    }
}