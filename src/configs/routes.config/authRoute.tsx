import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/`,
        component: lazy(() => import('@/views/auth/SignIn')),
    },
]

export default authRoute
