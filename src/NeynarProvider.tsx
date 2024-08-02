import { NeynarContextProvider, Theme } from "@neynar/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NeynarProviderProps {
    children: ReactNode;
}


export default function NeynarProvider({ children }: NeynarProviderProps) {

    const clientId = import.meta.env.VITE_NEYNAR_CLIENT_ID;
    const navigate = useNavigate()
    return (
        <NeynarContextProvider
            settings={{
                clientId: clientId || "",
                defaultTheme: Theme.Light,
                eventsCallbacks: {
                    onAuthSuccess: () => {
                        navigate('/user')
                    },
                    onSignout() {
                        navigate('/')
                    },
                },
            }}
        >
        {children}

        </NeynarContextProvider>

    )

}
