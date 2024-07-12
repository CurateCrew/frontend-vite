import { forwardRef } from 'react'
import classNames from 'classnames'
import { CgSpinner } from 'react-icons/cg'
import type { CommonProps } from '@/@types/common'
import type { ElementType } from 'react'

export interface SpinnerProps extends CommonProps {
    color?: string
    indicator?: ElementType
    isSpining?: boolean
    size?: string | number
}

const Spinner = forwardRef((props: SpinnerProps, ref) => {
    const {
        className,
        color,
        indicator: Component = CgSpinner,
        isSpining = true,
        size = 20,
        style,
        ...rest
    } = props


   

    const spinnerStyle = {
        height: size,
        width: size,
        ...style,
    }

    const spinnerClass = classNames(
        isSpining && 'animate-spin',
        color && `text-${color}`,
        className
    )

    return (
        <Component
            ref={ref}
            style={spinnerStyle}
            className={spinnerClass}
            {...rest}
        />
    )
})

Spinner.displayName = 'Spinner'

export default Spinner
