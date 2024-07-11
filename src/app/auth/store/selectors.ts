import { createSelector } from '@ngrx/store';
import { authFeature } from 'src/app/auth/store/reducers';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

//упрощенный вариант
// export const { selectAuthState, selectIsSubmitting } = authFeature;

export const selectAuthState = createSelector(
  authFeature.selectAuthState,
  (state: AuthStateInterface) => state
);

export const selectIsSubmitting = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.isSubmitting
);

export const selectValidationErrors = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.validationErrors
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.isLoggedIn
);

export const selectIsAnonymous = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.isLoggedIn === false
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.currentUser
);
