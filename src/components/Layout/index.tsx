import { ReactNode } from "react"
import { Header } from "../Header"
import { LayoutContainer } from './style'

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {

    return(
        <LayoutContainer>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </LayoutContainer>
    )
}