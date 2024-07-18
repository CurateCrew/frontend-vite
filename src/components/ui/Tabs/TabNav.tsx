import { forwardRef } from 'react'
import classNames from 'classnames'
import { useTabs } from './context'
import useCallbackRef from '../hooks/useCallbackRef'
import type { CommonProps } from '../@types/common'
import type { TabsValue } from './context'
import type { ReactNode } from 'react'

export interface TabNavProps extends CommonProps {
    disabled?: boolean
    icon?: string | ReactNode
    value: TabsValue
}

const TabNav = forwardRef<HTMLDivElement, TabNavProps>((props, ref) => {
    const {
        value: valueProp,
        disabled,
        className,
        icon,
        children,
        ...rest
    } = props

    const { value, onValueChange, variant } = useTabs()
    const isSelected = valueProp === value


    const onTabNavClick = useCallbackRef(() => {
        if (!isSelected && !disabled) {
            onValueChange?.(valueProp)
        }
    })



    const tabNavClass = classNames(
        'tab-nav',
        `tab-nav-${variant}`,
        isSelected &&
            `tab-nav-active text-[#005377] `,
        // isSelected && variant === 'underline' && `border-[#005377]`,
        isSelected &&
            variant === 'pill' &&
            `bg-white opacity-100 text-[#005377]`,
        disabled && 'tab-nav-disabled',
        !disabled &&
            !isSelected &&
            `hover:text-[#005377] `,
        className
    )

    return (
        <div
            ref={ref}
            className={tabNavClass}
            role="tab"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={onTabNavClick}
            onKeyDown={onTabNavClick}
            {...rest}
        >
            {icon && <div className="tab-nav-icon">{icon}</div>}
            {children}
        </div>
    )
})

TabNav.displayName = 'TabNav'

export default TabNav
