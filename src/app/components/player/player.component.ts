import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestServce } from '../selector/request.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('videoContent') videoView: ElementRef;
  @ViewChild('progressBar') progressView: ElementRef;
  @ViewChild('progressFill') fillView: ElementRef;
  @ViewChild('playButton') playView: ElementRef;
  @ViewChild('playIcon') playIcon: ElementRef;
  @ViewChild('pauseIcon') pauseIcon: ElementRef;
  // @ViewChild('playerVolume') volumeView: ElementRef;
  // @ViewChild('skipButton') skipView: ElementRef;
  public status: string;
  public isPlaying: boolean;
  public fill: number;
  public currentTime: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestService: RequestServce) { }

  togglePlay() {
    status = this.videoView.nativeElement.paused ? 'play' : 'pause';
    this.videoView.nativeElement[status]();
    status === 'play' ? this.isPlaying = true : this.isPlaying = false;
  }

  setUpdatedTime(data) {
    this.currentTime = data.target.currentTime;
    // console.log(this.currentTime);
  }

  onProgress() {
    this.fillView.nativeElement.value = ( this.currentTime / this.videoView.nativeElement.duration) * 100;
    this.fill = this.fillView.nativeElement.value;
  }

  ngOnInit()  {
    this.fillView.nativeElement.addEventListener('change', this.onProgress);
  }

}
