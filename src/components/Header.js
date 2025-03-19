import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import SearchBar from './SearchBar';

import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp_icon.png'

export default function Header() {
    const [widthWindow, setWidthWIndow] = useState(window.innerWidth);
    const [filterText, setFilterText] = useState('');

    const BurgerButtonElement = useRef();

    
    useEffect(() => {
        if(widthWindow < 768)
            BurgerButtonElement.current.style.display = 'block';
        else{
            BurgerButtonElement.current.style.display = 'none';
            BurgerButtonElement.current.classList.remove("Active");
        }

    },[widthWindow]);
    
    const updateWindowDimensions = () => {
        setWidthWIndow(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return (
        <header>
            <div className="Logo">
                <Link to='/'>
                    <img src={logo} alt='altLogo'></img>
                </Link>
            </div>
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            <div className='WhatsApp' title='Pedir turno'>
                <a href="http://bit.ly/cpasteurwhatsapp" target='_blank' rel='noreferrer'>
                    <img src={whatsapp} alt='altWhatsappIcon'/>
                </a>
            </div>
            <div className="BurgerButton" ref={BurgerButtonElement} onClick={() => {BurgerButtonElement.current.classList.toggle('Active')}}>≡</div>
            <NavBar />
            <hr/>
        </header>
    );
}