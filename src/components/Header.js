import NavBar from './NavBar';
import SearchBar from './SearchBar';

import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp_icon.png'

export default function Header() {
    return (
        <header>
            <div className="Logo">
                <a href='#'>
                    <img src={logo}></img>
                </a>
            </div>
            <SearchBar />
            <div className='WhatsApp' title='Pedir turno'>
                <a href="http://bit.ly/cpasteurwhatsapp" target='_blank'>
                    <img src={whatsapp}/>
                </a>
            </div>
            { window.innerWidth < 768 && <div className="BurgerButton">≡</div> }
            <NavBar />
            <hr/>
        </header>
    );
}