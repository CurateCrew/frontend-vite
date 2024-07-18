import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { themeConfig } from '@/configs/theme.config'
import {
    
    NAV_MODE_LIGHT,
    NAV_MODE_DARK,
    NAV_MODE_THEMED,
    MODE_DARK,
    MODE_LIGHT,
} from '@/constants/theme.constant'
import type {
    Mode,
    NavMode,
    ColorLevel,
} from '@/@types/theme'

const initialNavMode = () => {
   

    return themeConfig.navMode
}

export type ThemeState = {
    themeColor: string
    mode: Mode
    primaryColorLevel: ColorLevel
    panelExpand: boolean
    navMode: NavMode
    cardBordered: boolean
    layout: {
        sideNavCollapse: boolean
    }
}

const initialState: ThemeState = {
    themeColor: themeConfig.themeColor,
    mode: themeConfig.mode,
    primaryColorLevel: themeConfig.primaryColorLevel,
    panelExpand: themeConfig.panelExpand,
    cardBordered: themeConfig.cardBordered,
    navMode: initialNavMode(),
    layout: themeConfig.layout,
}



export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        
        setMode: (state, action: PayloadAction<Mode>) => {
            

            if (
                action.payload === MODE_DARK &&
                state.navMode !== NAV_MODE_THEMED
            ) {
                state.navMode = NAV_MODE_DARK
            }
            if (
                action.payload === MODE_LIGHT &&
                state.navMode !== NAV_MODE_THEMED
            ) {
                state.navMode = NAV_MODE_LIGHT
            }
            state.mode = action.payload
        },
        
        
        setSideNavCollapse: (state, action) => {
            state.layout = {
                ...state.layout,
                ...{ sideNavCollapse: action.payload },
            }
        },
        
        setPanelExpand: (state, action: PayloadAction<boolean>) => {
            state.panelExpand = action.payload
        },
        setThemeColor: (state, action: PayloadAction<string>) => {
            state.themeColor = action.payload
        },
        setThemeColorLevel: (state, action) => {
            state.primaryColorLevel = action.payload
        },
    },
})

export const {
    setMode,
    setSideNavCollapse,
    setPanelExpand,
    setThemeColor,
    setThemeColorLevel,
} = themeSlice.actions

export default themeSlice.reducer
