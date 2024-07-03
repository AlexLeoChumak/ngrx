import { createFeature, createReducer, on } from '@ngrx/store';

import { registerAction } from 'src/app/auth/store/actions';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export const authFeature = createFeature({
  name: 'auth',
  reducer: authReducer,
});
