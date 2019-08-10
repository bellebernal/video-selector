import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './response.model';
import { RequestServce } from './request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

@Injectable()
export class SelectorComponent implements OnInit {
  fetchedData: IResponse[] = [];
    private url$: Observable<any>;
    private id: string;
    @Output() src: string;

  constructor(
    private http: HttpClient,
    private requestService: RequestServce,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

    @Output()
    onGetSource(source: string) {
      this.src = source;
      console.log(this.src);
    }

    // *TODO*
      onFetchData() {
        this.requestService
        .fetchData()
        .subscribe(data => {
          this.fetchedData = data;
      });
    }

    // this.requestService
    // .fetchData()
    // .subscribe((fetchedData: any) => {
    //   this.fetchedData = {
    //     title: fetchedData.title,
    //     description: fetchedData.description,
    //     duration: fetchedData.duration,
    //     url: fetchedData.url
    //   };
    // });


  ngOnInit() {
  }

}
