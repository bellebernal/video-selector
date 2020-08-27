import { Component, OnInit, Injectable, Input } from '@angular/core';
import { RequestService } from './request.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
@Injectable()
export class SelectorComponent implements OnInit {
  // public response: any;
  // public src: string;
  @Input() public selectorData: any;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  // activateService() {
  //   return this.requestService.fetchData();
  // }

  ngOnInit() {
    console.log(this.requestService.fetchData());   // ** TODO ** console.log works but see log notes
  }
}
