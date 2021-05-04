import { HeaderContainer } from './style'
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <HeaderContainer>
            <div>
                :)
            </div>
            <nav>
                <ul>
                    <Link to=''>
                    
                    <li>Home</li>
                    </Link>
                    <li>Input Rádio</li>
                    <li>Forms</li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}