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
        mentioned_profiles: [],
        text: string
      }
    },
    username: string,
    verifications: [],
    verified_addresses: {
      eth_addresses: [],
      sol_addresses: []
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
    data: [number[]]
    success: boolean
} 

export type OnboardState = {
    loading: boolean
    isOnboarded: boolean
    preferences: string[]
    suggestedAccounts: number[]
    suggestedChannels: Channel[]
}

const initialState: OnboardState = {
    loading: false,
    isOnboarded: false,
    preferences:[],
    suggestedAccounts:[],
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

type FidArray = number[][];

function combineNestedArrays(nestedArrays: FidArray, targetLength: number = 100): number[] {
    // Flatten the array to get the combined length
    const combinedArray: number[] = nestedArrays.flat();
    const totalLength: number = combinedArray.length;

    // If the combined array length is less than or equal to the target length, return all fids
    if (totalLength <= targetLength) {
        return combinedArray;
    }

    // Calculate how many fids to select from each nested array
    const result: number[] = [];
    let remainingFids: number = targetLength; // Number of fids we still need
    const arraysCount: number = nestedArrays.length; // Number of arrays

    // Iterate over each nested array
    nestedArrays.forEach((array, index) => {
        // Calculate the number of fids to select from the current array
        const remainingArrays: number = arraysCount - index; // Number of remaining arrays
        const fidsToSelect: number = Math.ceil(remainingFids / remainingArrays);

        // Select fids from the current array and add them to the result
        result.push(...array.slice(0, fidsToSelect));
        remainingFids -= fidsToSelect; // Decrease the number of remaining fids needed
    });

    // Return exactly targetLength number of fids
    return result.slice(0, targetLength);
}



export const fetchSuggestedAccounts = createAsyncThunk(
    'auth/data/fetchSuggestedAccounts',
    async (fid: string) => {
        const response = await apiGetSuggestedAccounts<AccountResponse>(fid);
        
        if (response.data.status === 200) {
            const combinedArray = combineNestedArrays(response.data.data, 100)
            console.log(combinedArray)

            return {
                message: response.data.message,
                status: response.data.status,
                data: combinedArray,
                success: response.data.status
            };

        } else {
            return {
                message: response.data.message,
                status: response.data.status,
                data: response.data.data.flat(),
                success: response.data.status
            };
        }
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