import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { getUserPreferences } from '@/store'
import { useEffect } from 'react'
import { useNeynarContext } from "@neynar/react";

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const dispatch = useAppDispatch()
    const  {isOnboarded}  = useAppSelector((state) => state.auth.onboard)
    const { isAuthenticated } = useNeynarContext();
    const  {fid}  = useAppSelector((state) => state.auth.user.profile)

    useEffect(() => {
        fetchPreferences()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchPreferences = () => {
        if (fid) {
            dispatch(getUserPreferences(`${fid}`))
        }
    }

    console.log(isAuthenticated)
    const location = useLocation()

    if (!isAuthenticated) {
        return (
            <Navigate
                replace
                to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`}
            />
        )
    }

    if (!isOnboarded) {
        return <Navigate to="/onboarding" replace />;
    }

    return <Outlet />
}

export default ProtectedRoute
