import { useMemo, lazy, Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { fetchUserFeed, setUser } from '@/store'
import { useNeynarContext } from "@neynar/react";



const Layout = () => {
    const { user, isAuthenticated } = useNeynarContext();
    const { fid } = useAppSelector((state) => state.auth.user.profile)
    const  {isOnboarded}  = useAppSelector((state) => state.auth.onboard)
    const dispatch = useAppDispatch()


    const AppLayout = useMemo(() => {
        if (isAuthenticated) {

            if (user) {
                dispatch(setUser({ loading: false, profile: user }));
            }

            if (isOnboarded) {
                dispatch(fetchUserFeed(`${fid}`))
                return lazy(() => import('../../views/Home'))
            }

            return lazy(() => import('../../views/Onboarding'))

        }

        return lazy(() => import('./AuthLayout'))
    }, [isAuthenticated, isOnboarded, dispatch, fid, user])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col min-h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default Layout
