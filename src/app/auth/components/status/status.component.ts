import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState, selectAuthState} from '../../store/app.states';
import {ClearStore} from '../../store/actions/auth.actions';
import {UserInfo} from '../../models/user-info';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  userInfo: UserInfo = new UserInfo();
  token: string = null;
  getState: Observable<any>;
  errorMessage: string | null;
  isAuthenticated: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.token = state.token;
      this.userInfo = state.userInfo;
      this.errorMessage = state.errorMessage;
    });
  }

  clearStore(): void {
    this.store.dispatch(new ClearStore);
  }
}
