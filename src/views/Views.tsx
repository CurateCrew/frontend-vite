import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'
import appConfig from '@/configs/app.config'
import PageContainer from '@/components/modules/PageContainer'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '@/components/route/ProtectedRoute'
import PublicRoute from '@/components/route/PublicRoute'
import AppRoute from '@/components/route/AppRoute'



const { authenticatedEntryPath } = appConfig

const AllRoutes = () => {
   

    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />}>
                <Route
                    path="/"
                    element={<Navigate replace to={authenticatedEntryPath} />}
                />
                {protectedRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={
                            <PageContainer {...route.meta}>
                                <AppRoute
                                    routeKey={route.key}
                                    component={route.component}
                                    {...route.meta}
                                />
                            </PageContainer>
                        }
                    />
                ))}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <AppRoute
                                routeKey={route.key}
                                component={route.component}
                                {...route.meta}
                            />
                        }
                    />
                ))}
            </Route>
        </Routes>
    )
}

const Views = () => {
    return (
        <Suspense fallback={<Loading loading={true} />}>
            <AllRoutes />
        </Suspense>
    )
}

export default Views
