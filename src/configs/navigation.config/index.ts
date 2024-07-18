import {
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [

    {
        key: 'home',
        path: '/home',
        title: 'For you',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },

    {
        key: 'onboarding',
        path: '/onboarding',
        title: 'Onboarding',
        translateKey: 'nav.onboarding',
        icon: 'onboarding',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },




    
]

export default navigationConfig
