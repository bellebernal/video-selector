import * as firebase from 'firebase/app';
import { Injectable, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { IResponse } from './files.model';
// import response from '../assets/response.json';

const config = {
  apiKey: 'AIzaSyAzhYuONm41KLqw7Bed4-OPax2DkQQsFh0',
  authDomain: 'videos-db.firebaseapp.com',
  databaseURL: 'https://videos-db.firebaseio.com',
  projectId: 'videos-db',
  storageBucket: 'videos-db.appspot.com',
  messagingSenderId: '119171243284',
  appId: '1:119171243284:web:60b3210e49e55a2a5ab601'
};

firebase.initializeApp(config);

@Injectable({ providedIn: 'root' })
export class RequestService implements OnInit{
  @Output() public response: any;
  @Output() public selectorData: string[];
  @Output() public videoData: any;
  @Output() public playerData: any;

  constructor(private http: HttpClient) {}

  
  // ** TODO **
  fetchData() {
    return this.http
      .get('https://videos-db.firebaseio.com/screens.json')
      // * TODO*   .subscribe() here
      // ** can json obj be assigned to a string[]??
      .pipe(
        map(response => {
          this.response = response;
          const responseData = JSON.parse(this.response);
          console.log(responseData);  //console.log not working
          // convert to string[]
          // ... pulll out key value pairs of the nested object we're accessing
          // this.selectorData = {...this.videos[0].config};
          // console.log(this.selectorData);
          // this.videos.forEach(video => {
          //   this.videoData.push(video.config.views);
          // })
          // return responseData;  // needed to be able to subcribe to
        })
      );
      // * TODO*   .subscribe() here      
      // .pipe(  
      //   map(() => {
      //     const playFiles = this.videoData;
      //     playFiles.forEach((value, index) => {
      //       if (
      //         playFiles.hasOwnProperty(index) &&
      //         !isNaN(parseInt(index, 10))
      //       ) {
      //         value.filter(subarray => {
      //           const id = subarray.id;
      //           if (id.includes('Player')) {
      //             this.playerData.push(subarray);
      //           }
      //         });
      //       }
      //     });
      //   })
      // )
      // * TODO*   .subscribe() here      
      // .pipe(
      //   map(() => {
      //     const playables = this.playerData;
      //     this.selectorData.forEach(selector => {
      //       selector['files'];
      //       playables.forEach(play => {
      //         if (play.id.includes(selector.id)) {
      //           selector['files'] = play.files;
      //         }
      //       });
      //     });
      //   })
      // );
      // .subscribe() needed here??
  }
  
  ngOnInit() {
    console.log(this.fetchData());  // log doesnt work ** TODO **
  }
  
}




  
  // pipe(
  //   map(response => {
  //     this.videos = response;
  //     this.selectorData = this.videos[0].config.views;
  //     this.videos.forEach(video => {
  //       this.videoData.push(video.config.views);
  //     });
  //   })
  // )
  // .pipe(
  //   map(() => {
  //     const playFiles = this.videoData;
  //     playFiles.forEach((value, index) => {
  //       if (
  //         playFiles.hasOwnProperty(index) &&
  //         !isNaN(parseInt(index, 10))
  //       ) {
  //         value.filter(subarray => {
  //           const id = subarray.id;
  //           if (id.includes('Player')) {
  //             this.playerData.push(subarray);
  //           }
  //         });
  //       }
  //     });
  //   })
  // )
  // .pipe(
  //   map(() => {
  //     const playables = this.playerData;
  //     this.selectorData.forEach(selector => {
  //       selector['files'];
  //       playables.forEach(play => {
  //         if (play.id.includes(selector.id)) {
  //           selector['files'] = play.files;
  //         }
  //       });
  //     });
  //   })
  // );

  // gets data and transforms from json into an array object
  // fetchData() {
  //   return (this.response = this.http
  //     .get<{ [key: string]: IResponse }>('../assets/response.json')
  //     .pipe(
  //       map(responseData => {
  //         const iresponseArray: IResponse[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             iresponseArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         console.log(iresponseArray);
  //         return iresponseArray;
  //       })
  //     ));
  // }

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

  // *TODO* : research interface for data binding or prop binding??
