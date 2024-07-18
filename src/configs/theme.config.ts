import { THEME_ENUM } from '@/constants/theme.constant'
import {
    Mode,
    ColorLevel,
    NavMode,
    ControlSize,
} from '@/@types/theme'

export type ThemeConfig = {
    themeColor: string
    mode: Mode
    primaryColorLevel: ColorLevel
    panelExpand: boolean
    navMode: NavMode
    controlSize: ControlSize
    cardBordered: boolean
    layout: {
        sideNavCollapse: boolean
    }
}

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */
export const themeConfig: ThemeConfig = {
    themeColor: 'indigo',
    mode: THEME_ENUM.MODE_DARK,
    primaryColorLevel: 600,
    cardBordered: true,
    panelExpand: false,
    controlSize: 'md',
    navMode: THEME_ENUM.NAV_MODE_LIGHT,
    layout: {
        sideNavCollapse: false,
    },
}
