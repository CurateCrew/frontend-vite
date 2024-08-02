import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import { useNeynarContext } from "@neynar/react";

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { isAuthenticated } = useNeynarContext();

    return isAuthenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet />
}

export default PublicRoute
