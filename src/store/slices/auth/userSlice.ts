import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { Hex } from 'viem';

export type Profile ={
    fid?: number
    username?: string
    bio?: string
    displayName?: string
    pfpUrl?: string
    custody?: Hex
    verifications?: Hex[]
}
export type UserState = {
    isAuthenticated: boolean
    profile : Profile
}

const initialState: UserState = {
   isAuthenticated: false,
   profile: {}
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.isAuthenticated = action.payload?.isAuthenticated
            state.profile.fid = action.payload?.profile.fid
            state.profile.username = action.payload?.profile.username
            state.profile.bio = action.payload?.profile.bio
            state.profile.displayName = action.payload?.profile.displayName
            state.profile.pfpUrl = action.payload?.profile.pfpUrl
            state.profile.custody = action.payload?.profile.custody
            state.profile.verifications = action.payload?.profile.verifications
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer