import { combineReducers } from '@reduxjs/toolkit'
import user, { UserState } from './userSlice'

const reducer = combineReducers({
    user,
})

export type AuthState = {
    user: UserState
}

export * from './userSlice'

export default reducer