import { combineReducers, CombinedState, AnyAction, Reducer } from 'redux'
import auth, { AuthState } from './slices/auth'
import theme, { ThemeState } from './slices/theme/themeSlice';
import base, { BaseState } from './slices/base'


export type RootState = CombinedState<{
    auth: CombinedState<AuthState>,
    theme: ThemeState,
    base: CombinedState<BaseState>
    
}>

export interface AsyncReducers {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    [key: string]: Reducer<any, AnyAction>
}


const staticReducers = {
    auth,
    base,
    theme,
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
        (state: RootState, action: AnyAction) => {
            const combinedReducer = combineReducers({
                ...staticReducers,
                ...asyncReducers,
            })
            return combinedReducer(state, action)
        }

export default rootReducer
