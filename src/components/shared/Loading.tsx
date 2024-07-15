import type { CommonProps } from '@/@types/common'
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
    } = props

    return (
        <div className={`fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      `} >

        {children}
        {loading && (
            <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
        )}
        {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
               <Spinner color="[#005377]" className={spinnerClass} size={40} />
            </div>
        )}
    </div>
    )
}
