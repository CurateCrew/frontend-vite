import type { CommonProps } from '@/@types/common'
// import Spinner from '../ui/Spinner'


interface BaseLoadingProps extends CommonProps {
    loading: boolean
    spinnerClass?: string

}
export default function Loading(props: BaseLoadingProps) {
    const {
        loading,
        // spinnerClass,
        children,
    } = props

    return (
        <div className={`${loading? 'fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in' : ''} "
      `} >

        {children}
        {loading && (
            <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
        )}
        {loading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
               {/* <Spinner color="[#005377]" className={spinnerClass} size={40} /> */}
                <div className="flex items-end">
                    <div className="w-8 h-8 m-1 bg-[#002855] rounded-full animate-zigzag delay-1"></div>
                    <div className="w-8 h-8 m-1 bg-[#00A1AB] rounded-full animate-zigzag delay-2"></div>
                    <div className="w-8 h-8 m-1 bg-[#D4C497] rounded-full animate-zigzag delay-3"></div>
                    <div className="w-8 h-8 m-1 bg-[#FFD700] rounded-full animate-zigzag delay-4"></div>
                    <div className="w-8 h-8 m-1 bg-[#DACA77] rounded-full animate-zigzag delay-5"></div>
                </div>
            </div>
            
        )}
    </div>
    )
}
