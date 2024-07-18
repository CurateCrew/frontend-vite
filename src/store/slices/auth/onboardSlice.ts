import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { apiGetUserPreferences } from '@/services/OnboardingService';
import { apiGetSuggestedAccounts, apiGetSuggestedChannels, apiSavePreferences } from '@/services/OnboardingService';


export type Interest = string;

export type PrefrencesPostRequest = {
    fid: string
    preferences: Interest[]
}

export type PrefrencesPostResponse = {
    message: string
    status: number
    data: PrefrencesPostRequest
    success: boolean
}

export type GetUserDetailsRequest = { fid: string }



export type PrefrencesGetResponse = {
    data:[]
}

export type Channel = {
    id: string
    url: string
    name: string
    description: string
    imageUrl: string
    leadFid: number,
    hostFids: number[],
    moderatorFid: number,
    createdAt: number,
    followerCount: number
}

export type Account = {
    active_status: string,
    custody_address: string,
    display_name: string,
    fid: number,
    follower_count: number,
    following_count: number,
    object: string,
    pfp_url: string,
    power_badge: boolean,
    profile: {
      bio: {
        mentioned_profiles?: [],
        text: string
      }
    },
    username: string,
    verifications: [],
    verified_addresses: {
      eth_addresses?: [],
      sol_addresses?: []
    }
  }

export type ChannelResponse ={
    message: string
    status: number
    data: Channel[]
    success: boolean
} 

export type AccountResponse = {
    message: string
    status: number
    data: {users: Account[]}
    success: boolean
} 

export type OnboardState = {
    loading: boolean
    isOnboarded: boolean
    preferences: string[]
    suggestedAccounts: {users:Account[]}
    suggestedChannels: Channel[]
}

const initialState: OnboardState = {
    loading: false,
    isOnboarded: false,
    preferences:[],
    suggestedAccounts:{ users: []},
    suggestedChannels:[]
}


export const saveUserPreferences = createAsyncThunk(
    'auth/data/saveUserPreferences',
    async (data: PrefrencesPostRequest) => {
        const response = await apiSavePreferences<PrefrencesPostResponse>(data)
        return response.data
    }
)


export const getUserPreferences = createAsyncThunk(
    'auth/data/getUserPreferences',
    async (fid: string) => {
        const response = await apiGetUserPreferences<PrefrencesGetResponse>(fid);
        return response.data;
    }
);



export const fetchSuggestedAccounts = createAsyncThunk(
    'auth/data/fetchSuggestedAccounts',
    async (fid: string) => {
        const response = await apiGetSuggestedAccounts<AccountResponse>(fid);
        
        return response.data;
    }
);


// export const fetchSuggestedFids = async () => {
    
// }



export const fetchSuggestedChannels = createAsyncThunk(
    'auth/data/fetchSuggestedChannels',
    async (fid: string) => {
        const response = await apiGetSuggestedChannels<ChannelResponse>(fid);
        return response.data;
    }
);

const onboardSlice = createSlice({
    name: `${SLICE_BASE_NAME}/onboard`,
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserPreferences.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload.data.length > 0 ) {
                    state.isOnboarded = true;
                } else {
                    state.isOnboarded = false;
                }
                state.preferences = action.payload.data
                state.loading = false
            })
            .addCase(getUserPreferences.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserPreferences.rejected, (state, action) => {
                state.loading = false
                console.error('prefrences failed:', action.payload);
            })
            .addCase(saveUserPreferences.fulfilled, (state, action) => {
                console.log(action.payload)
                state.preferences = action.payload.data.preferences
                state.loading = false
            })
            .addCase(saveUserPreferences.pending, (state) => {
                state.loading = true
            })
            .addCase(saveUserPreferences.rejected, (state, action) => {
                state.loading = false
                console.error('prefrences failed:', action.payload);
            })
            .addCase(fetchSuggestedAccounts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.suggestedAccounts = action.payload.data
                state.loading = false
            })
            .addCase(fetchSuggestedAccounts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSuggestedAccounts.rejected, (state, action) => {
                state.loading = false
                console.error('prefrences failed:', action.payload);
            })
            .addCase(fetchSuggestedChannels.fulfilled, (state, action) => {
                console.log(action.payload)
                state.suggestedChannels = action.payload.data
                state.loading = false
            })
            .addCase(fetchSuggestedChannels.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSuggestedChannels.rejected, (state, action) => {
                state.loading = false
                console.error('prefrences failed:', action.payload);
            })
    },
})

export default onboardSlice.reducer