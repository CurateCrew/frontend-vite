import axios from 'axios'
import appConfig from '@/configs/app.config'


const BaseService = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiPrefix,
})

BaseService.interceptors.request.use(
    (config) => {

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

BaseService.interceptors.response.use(
    (response) => response,
    (error) => {

        return Promise.reject(error)
    }
)

export default BaseService
