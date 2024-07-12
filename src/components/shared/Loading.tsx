import type { CommonProps } from '@/@types/common'
import classNames from 'classnames'
import Spinner from '../ui/Spinner'


interface BaseLoadingProps extends CommonProps {
    loading: boolean
    spinnerClass?: string

}
export default function Loading(props: BaseLoadingProps) {
    const {
        loading,
        spinnerClass,
        children,
        className,
    } = props

    return (
        <div className={classNames(loading ? 'relative' : '', className)}>

        {children}
        {loading && (
            <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
        )}
        {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
               <Spinner className={spinnerClass} size={40} />
            </div>
        )}
    </div>
    )
}
