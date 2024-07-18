import React from 'react'

import Views from '@/views'
import Header from '../modules/Header'
import LeftNav from '../modules/LeftNav'
import RightNav from '../modules/RightNav'



const HeaderActionsStart = () => {
    return (
        <>
            {/* <MobileNav />
            <SideNavToggle /> */}
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            {/* <SidePanel />
            <UserDropdown hoverable={false} /> */}
        </>
    )
}

export default function DashboardLayout() {
    

    return (
        <div className="app-layout-classic flex flex-auto flex-col text-[#63676B]">
            <div className="flex flex-auto min-w-0">
                <LeftNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow dark:shadow-2xl"
                        headerStart={<HeaderActionsStart />}
                        headerEnd={<HeaderActionsEnd />}
                    />
                    <div className="h-full flex flex-auto flex-col">
                        <Views />
                    </div>
                </div>
                <RightNav/>
            </div>
        </div>
    )
}
