import { useMemo, lazy, Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { useAppSelector } from '@/store/hook'



const Layout = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth.user)
    const  {isOnboarded}  = useAppSelector((state) => state.auth.onboard)
    console.log(isAuthenticated, isOnboarded)


    const AppLayout = useMemo(() => {
        if (isAuthenticated) {

            if (isOnboarded) {
                return lazy(() => import('./DashboardLayout'))
            }

            return lazy(() => import('../../views/Onboarding'))

        }

        return lazy(() => import('./AuthLayout'))
    }, [isAuthenticated, isOnboarded])

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
