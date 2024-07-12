import { useMemo, lazy, Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { useAppSelector } from '@/store/hook'



const Layout = () => {

    const { isAuthenticated } = useAppSelector((state) => state.auth.user)
    console.log(isAuthenticated)


    const AppLayout = useMemo(() => {
        if (isAuthenticated) {
            return lazy(() => import('./DashboardLayout'))
        
        }

        return lazy(() => import('./AuthLayout'))
    }, [isAuthenticated])

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout />
        </Suspense>
    )
}

export default Layout
