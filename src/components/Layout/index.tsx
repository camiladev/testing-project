import { ReactNode } from "react"
import { Header } from "../Header"

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {

    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}