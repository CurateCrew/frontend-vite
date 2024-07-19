import ApiService from "./ApiService";


export async function apiFetchUserFeed<T>(fid: string) {
    return ApiService.fetchData<T>({
        url: `/user/get-feed/${fid}`,
        method: 'get',
    })
}