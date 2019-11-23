import { Component, OnInit } from '@angular/core';
import { SnackbarAnimations } from './snackbar.animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    SnackbarAnimations.snackVisibility
  ]
})
export class SnackbarComponent implements OnInit {

  message = 'Hello there!';
  snackVisibility = 'hidden';

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier$
      .do((message: string) => {
        this.message = message;
        this.snackVisibility = 'visible';
      }).switchMap(() => {
        return Observable.timer(3000);
      })
      .subscribe(() => {
        return this.snackVisibility = 'hidden';
      });
  }
}
