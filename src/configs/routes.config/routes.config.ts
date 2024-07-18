import { lazy } from 'react'
import type { Routes } from '@/@types/routes'
import authRoute from './authRoute';


export const publicRoutes: Routes = [...authRoute]


export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
    },

    {
        key: 'onboarding',
        path: '/onboarding',
        component: lazy(() => import('@/views/Onboarding')),
    },
    
]