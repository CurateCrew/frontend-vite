import { Suspense } from 'react'
import classNames from 'classnames'
import Container from '@/components/shared/Container'

import type { CommonProps } from '@/@types/common'
import type { Meta } from '@/@types/routes'
import type { ElementType, ComponentPropsWithRef } from 'react'

export interface PageContainerProps extends CommonProps, Meta {
    contained?: boolean
}

const CustomHeader = <T extends ElementType>({
    header,
    ...props
}: {
    header: T
} & ComponentPropsWithRef<T>) => {
    const Header = header
    return <Header {...props} />
}

const PageContainer = (props: PageContainerProps) => {
    const {
        children,
        header,
        extraHeader,
    } = props

    return (
        <div className="h-full flex flex-auto flex-col justify-between">
            <main className="h-full">
                <div
                    className={classNames(
                        'page-container relative h-full flex flex-auto flex-col mx-auto'
                    )}
                >
                    {(header || extraHeader) && (
                        <div
                            className={classNames(
                               
                                'flex items-center justify-between mb-4'
                            )}
                        >
                            <div>
                                {header && typeof header === 'string' && (
                                    <h3>{header}</h3>
                                )}
                                <Suspense fallback={<div></div>}>
                                    {header && typeof header !== 'string' && (
                                        <CustomHeader header={header} />
                                    )}
                                </Suspense>
                            </div>
                            <Suspense fallback={<div></div>}>
                                {extraHeader &&
                                    typeof extraHeader !== 'string' && (
                                        <CustomHeader header={extraHeader} />
                                    )}
                            </Suspense>
                        </div>
                    )}
                    <Container className="h-full">
                        <>{children}</>
                    </Container>
                </div>
            </main>
           
        </div>
    )
}

export default PageContainer
