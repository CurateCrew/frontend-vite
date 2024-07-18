import ApiService from './ApiService'
import { Account, PrefrencesPostRequest} from '@/store'
import axios, { AxiosRequestConfig } from 'axios';


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


const options: AxiosRequestConfig = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZmY0MzcyNi0zMTI2LTQ3MWQtYTAyYy01NDcyNjU4ZWZkYzciLCJlbWFpbCI6Im1hcnljeW50aGlhbWFyYTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImRiZWU2Njc1ZWNmZTc1YjI3MzhhIiwic2NvcGVkS2V5U2VjcmV0IjoiYTg0ZTk0NGY0ZmFiODE1M2U4NmRhNDgyYWFkMWUwNmNiMWQxZjNhMGY0MTdhMmYxNzIzN2Y1ZGRhMTA1OWZlYiIsImlhdCI6MTcyMDI2NDQ0NH0.r2nd2khjmZ6IHEwg0_t08-fAvYTLa79yg6zjP1vQ9bU'
    }
};

export async function fetchDetailsForFids(fids: number[]): Promise<Account[]> {
    const promises = fids.map(fid => 
        axios.get(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching details for fid ${fid}:`, error);
                return null; // Handle the error gracefully and continue
            })
    );

    const results = await Promise.all(promises);
    console.log(results);
    return results.filter(result => result !== null); // Filter out null results
}


