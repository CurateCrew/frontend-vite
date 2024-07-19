import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { apiFetchUserFeed } from '@/services/feedService'


export type Embeds =  {
    url: string
}

export type Cast = {
    object: string,
    hash: string,
    thread_hash: string,
    parent_hash: string | null,
    parent_url: string | null,
    root_parent_url: string | null,
    parent_author: {
        fid: string | null
    },
    author: {
        object: string,
        fid: 280,
        custody_address: string,
        username: string,
        display_name: string,
        pfp_url: string,
        profile: {
            bio: {
                text: string
            }
        },
        follower_count: number,
        following_count: number,
        verifications: string[],
        verified_addresses: {
            eth_addresses: string[],
            sol_addresses: string[]
        },
        active_status: string,
        power_badge: boolean
    },
    text: string,
    timestamp: string,
    embeds: Embeds[],
    reactions: {
        likes_count: number,
        recasts_count: number,
        likes: [
            {
                fid: number,
                fname: string
            }
        ],
        recasts: []
    },
    replies: {
        count: number
    },
    channel: string | null,
    mentioned_profiles: []
}

export type FeedResponse = {
    message: string
    status: number
    data: {casts: Cast[]}
    success: boolean
}


export type FeedState = {
   loading: boolean
   data: {casts: Cast[]}
}

const initialState: FeedState = {
    loading: false,
    data: {casts: []}
}


export const fetchUserFeed = createAsyncThunk(
    'allfeed/data/fetchUserFeed',
    async (fid: string) => {
        const response = await apiFetchUserFeed<FeedResponse>(fid);
        return response.data;
    }
);


const feedSlice = createSlice({
    name: `${SLICE_BASE_NAME}/apifeed`,
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
           
            .addCase(fetchUserFeed.fulfilled, (state, action) => {
                console.log(action.payload)
                state.data = action.payload.data
                state.loading = false
            })
            .addCase(fetchUserFeed.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUserFeed.rejected, (state, action) => {
                state.loading = false
                console.error('Feed fetch failed:', action.payload);
            })
           
    },
})

export default feedSlice.reducer