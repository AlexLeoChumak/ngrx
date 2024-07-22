import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import {
  selectIsLoggedIn,
  selectCurrentUser,
  selectIsAnonymous,
} from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(selectIsLoggedIn));
    this.isAnonymous$ = this.store.pipe(select(selectIsAnonymous));
    this.currentUser$ = this.store.pipe(select(selectCurrentUser));
  }
}
