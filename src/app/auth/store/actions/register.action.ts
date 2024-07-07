import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/actionTypes';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: any }>()
);

export const registeFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: any }>()
);
