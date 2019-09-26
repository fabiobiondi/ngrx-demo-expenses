import { itemsReducer } from '../../features/dashboard/store/reducers/items.reducer';
import { authReducer } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../app.module';
import { profileReducer } from './profile.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  profile: profileReducer
};
