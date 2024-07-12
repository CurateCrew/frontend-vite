import { combineReducers, CombinedState, AnyAction } from 'redux'
import auth, { AuthState } from './slices/auth'


export type RootState = CombinedState<{
    auth: CombinedState<AuthState>,
    
}>


const rootReducer =() => 
    (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
        auth,
        
    })
    return combinedReducer(state, action)
}

export default rootReducer
