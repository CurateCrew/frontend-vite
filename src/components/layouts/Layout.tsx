import { useMemo, lazy, Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { fetchUserFeed } from '@/store'



const Layout = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth.user)
    const { fid } = useAppSelector((state) => state.auth.user.profile)
    const  {isOnboarded}  = useAppSelector((state) => state.auth.onboard)
    const dispatch = useAppDispatch()


    const AppLayout = useMemo(() => {
        if (isAuthenticated) {

            if (isOnboarded) {
                dispatch(fetchUserFeed(`${fid}`))
                return lazy(() => import('../../views/Home'))
            }

            return lazy(() => import('../../views/Onboarding'))

        }

        return lazy(() => import('./AuthLayout'))
    }, [isAuthenticated, isOnboarded, dispatch, fid])

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
