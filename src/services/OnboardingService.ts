import axios from 'axios'
import ApiService from './ApiService'
import { FollowPostRequest, PrefrencesPostRequest} from '@/store'


export async function apiGetUserPreferences<T>(fid: string) {
    return ApiService.fetchData<T>({
        url: `/user/get-preference/${fid}`,
        method: 'get',
    })
}

export async function apiSavePreferences<T>(data: PrefrencesPostRequest) {
    return ApiService.fetchData<T>({
        url: '/user/set-preference',
        method: 'post',
        data,
    })
}


export async function apiGetSuggestedAccounts<T>(fid: string) {
    return ApiService.fetchData<T>({
        url: `/user/get-farcaster-account/${fid}`,
        method: 'get',
    })
}

export async function apiGetSuggestedChannels<T>(fid: string) {
    return ApiService.fetchData<T>({
        url: `/user/get-channel/${fid}`,
        method: 'get',
    })
}


export async function apiCreateAndStoreSigner(data: FollowPostRequest) {
    try {
        const response = await axios.post("https://farcaster-curate-qauh.onrender.com/user/follow-farcaster-user", data);
        console.log(response)
        if (response.status === 200) {
          return response.data
        }
      } catch (error) {
        console.error("API Call failed", error);
        return {
            success: false,
            error: (error as Error).message,
            status: (error as Error).cause
        };
      }
}









