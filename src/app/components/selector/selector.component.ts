import {
  Component,
  OnInit,
  Injectable,
  Output
} from '@angular/core';
import { RequestServce } from './request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

@Injectable()
export class SelectorComponent implements OnInit {
    public response: any;
    public src: string;


  constructor(
    private requestService: RequestServce,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    @Output()
    onGetSource(source: string) {
      this.src = source;
      console.log(this.src);
    }

  ngOnInit() {
    this.requestService.ngOnInit();
  }

}
