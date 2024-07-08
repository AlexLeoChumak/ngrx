import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  currentUser: CurrentUserInterface | null;
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  validationErrors: any | null;
}
