import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NxtUser } from '../../user-auth/model/nxt-user.model';
import { NxtUserService } from '../../user-auth/services/nxt-user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  userId: string = null;
  user: NxtUser = null;

  private sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private nxtUserService: NxtUserService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.nxtUserService.getById(this.userId).pipe(
        map((user: NxtUser) => this.user = user)
      ).subscribe()
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
