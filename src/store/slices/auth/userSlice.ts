import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { Hex } from 'viem';

export type Profile ={
    state: "pending" | "completed";
    nonce?: string;
    message?: string;
    signature?: Hex;
    fid?: number;
    username?: string;
    bio?: string;
    displayName?: string;
    pfpUrl?: string;
    custody?: Hex;
    verifications?: Hex[];
}
export type UserState = {
    loading: boolean
    isAuthenticated: boolean
    profile : Profile
}

const initialState: UserState = {
    loading: false,
    isAuthenticated: false,
    profile: {state: "pending" },
}


const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setLoading(state, action){
            state.loading = action.payload;
        },
        setUser(state, action: PayloadAction<UserState>) {
            state.loading = action.payload?.loading
            state.isAuthenticated = action.payload?.isAuthenticated
            state.profile.fid = action.payload?.profile.fid
            state.profile.username = action.payload?.profile.username
            state.profile.bio = action.payload?.profile.bio
            state.profile.displayName = action.payload?.profile.displayName
            state.profile.pfpUrl = action.payload?.profile.pfpUrl
            state.profile.custody = action.payload?.profile.custody
            state.profile.verifications = action.payload?.profile.verifications
        },
        signOutSuccess(state) {
            state.loading = false
            state.isAuthenticated = false
            state.profile = {state:'pending'}
        },
    },
})

export const { setLoading, setUser, signOutSuccess } = userSlice.actions
export default userSlice.reducer