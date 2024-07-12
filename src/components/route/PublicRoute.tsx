import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import { useAppSelector } from '@/store/hook'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.user)

    return isAuthenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />
}

export default PublicRoute
