import { combineReducers } from '@reduxjs/toolkit'
import user, { UserState } from './userSlice'
import onboard, { OnboardState } from './onboardSlice'

const reducer = combineReducers({
    user,
    onboard
})

export type AuthState = {
    user: UserState
    onboard: OnboardState
}

export * from './userSlice'
export * from './onboardSlice'

export default reducer