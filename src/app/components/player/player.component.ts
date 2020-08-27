import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { RequestService } from '../selector/request.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @ViewChild('videoContent', { static: true }) video: ElementRef;
  @ViewChild('progressBar', { static: true }) progressView: ElementRef;
  @ViewChild('progressFill', { static: true }) fillView: ElementRef;
  @ViewChild('playButton', { static: false }) play: ElementRef;
  @ViewChild('playIcon', { static: false }) playIcon: ElementRef;
  @ViewChild('pauseIcon', { static: false }) pauseIcon: ElementRef;
  @ViewChildren('skipButton') skip: QueryList<any>;
  // @ViewChild('skipButton', { static: false }) skip: ElementRef;
  @ViewChild('volume', { static: true }) volume: ElementRef;

  public status: string;
  public isPlaying: boolean;
  public fill: number;
  public currentTime: number;
  public maxTime: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router // private requestService: RequestService
  ) {}

  togglePlay() {
    status = this.video.nativeElement.paused ? 'play' : 'pause';
    this.video.nativeElement[status]();
    status === 'play' ? (this.isPlaying = true) : (this.isPlaying = false);
  }

  setUpdatedTime(data: any) {
    this.currentTime = data.target.currentTime;
  }

  onProgress(data: any) {
    this.maxTime = data.target.duration;
    this.fill = (this.currentTime / this.maxTime) * 100;
    this.fillView.nativeElement.style.flexBasis = `${this.fill}%`;
  }

  // ** CONTINUE HERE **
  onSkip() {
    this.currentTime += parseInt(this.video.nativeElement.dataset.skip, 2);
    // this.fill = (this.currentTime / this.maxTime) * 100;
    // this.fillView.nativeElement.style.flexBasis = `${this.fill}%`;
  }

  // ngOnInit() {}
}
