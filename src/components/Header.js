import { useEffect, useState } from 'react';

import NavBar from './NavBar';
import SearchBar from './SearchBar';

import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp_icon.png'

export default function Header() {
    const [widthWindow, setWidthWIndow] = useState(window.innerWidth);

    useEffect(() => {
        const burgerButton = document.getElementsByClassName('BurgerButton')[0];
        if(widthWindow < 768)
            burgerButton.style.display = 'block';
        else{
            burgerButton.style.display = 'none';
            burgerButton.classList.remove("Active");
        }

    },[widthWindow]);
    
    const updateWindowDimensions = () => {
        setWidthWIndow(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

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
            <div className="BurgerButton" onClick={() => {document.getElementsByClassName('BurgerButton')[0].classList.toggle('Active')}}>≡</div>
            <NavBar />
            <hr/>
        </header>
    );
}