import ApiService from './ApiService'
import { PrefrencesPostRequest} from '@/store'


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






