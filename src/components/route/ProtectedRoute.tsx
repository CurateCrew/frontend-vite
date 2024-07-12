import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/store/hook'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const  isAuthenticated  = useAppSelector((state) => state.auth.user)

    const location = useLocation()

    if (!isAuthenticated) {
        return (
            <Navigate
                replace
                to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
