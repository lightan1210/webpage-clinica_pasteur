import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import SearchBar from './SearchBar';

import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp_icon.png'

export default function Header() {
    const [widthWindow, setWidthWIndow] = useState(window.innerWidth);
    const [filterText, setFilterText] = useState('');

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
                <Link to='/'>
                    <img src={logo}></img>
                </Link>
            </div>
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
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