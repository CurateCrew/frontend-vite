import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type Metadata = {
    bio: {
        text: string
    }
}


export type Profile = {
    signer_uuid?: string,
    object?: string,
    fid?: number,
    custody_address?: string,
    username?: string,
    display_name?: string,
    pfp_url?: string,
    profile?: Metadata,
    follower_count?: number,
    following_count?: number,
    verifications?: string[],
    verified_addresses?: {
        eth_addresses?: string[],
        sol_addresses?: string[]
    },
    active_status?: string,
    power_badge?: boolean
}


export type UserState = {
    loading: boolean
    profile : Profile
}


const initialState: UserState = {
    loading: false,
    profile: { },
}


const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setLoading(state, action){
            state.loading = action.payload;
        },
        setUser(state, action: PayloadAction<UserState>) {
            state.profile.signer_uuid = action.payload.profile.signer_uuid
            state.profile.object = action.payload.profile.object
            state.loading = action.payload?.loading
            state.profile.fid = action.payload?.profile.fid
            state.profile.username = action.payload?.profile.username
            state.profile.profile = action.payload.profile.profile
            // state.profile.profile?.bio?.text = action.payload?.profile.profile?.bio?.text
            state.profile.display_name = action.payload?.profile.display_name
            state.profile.pfp_url = action.payload?.profile.pfp_url
            state.profile.custody_address = action.payload?.profile.custody_address
            state.profile.verifications = action.payload?.profile.verifications
            state.profile.verified_addresses = action.payload?.profile.verified_addresses
            state.profile.follower_count = action.payload.profile.follower_count
            state.profile.following_count = action.payload.profile.following_count
            state.profile.active_status = action.payload.profile.active_status
        },
        signOutSuccess(state) {
            state.loading = false
            state.profile = {}
        },
    },
})

export const { setLoading, setUser, signOutSuccess } = userSlice.actions
export default userSlice.reducer