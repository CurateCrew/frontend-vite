import { combineReducers, CombinedState, AnyAction } from 'redux'
import auth, { AuthState } from './slices/auth'
import theme, { ThemeState } from './slices/theme/themeSlice';
import base, { BaseState } from './slices/base'



export type RootState = CombinedState<{
    auth: CombinedState<AuthState>,
    theme: ThemeState,
    base: CombinedState<BaseState>
    
}>


const rootReducer =() => 
    (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
        auth,
        theme,
        base,
    })
    return combinedReducer(state, action)
}

export default rootReducer
