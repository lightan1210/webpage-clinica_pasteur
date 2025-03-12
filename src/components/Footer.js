import phone from '../images/phone_icon.png'
import whatsapp from '../images/whatsapp_icon.png'
import instagram from '../images/instagram_icon.png'
import facebook from '../images/facebook_icon.png'
import linkedin from '../images/linkedin_icon.png'

export default function Footer() {
    return (
        <footer>
            <ul className="Info">
                <li>
                    <ul className='SubInfo'>
                        <label>Solicite Un Turno</label>
                        <li>
                            <a>
                                <img src={phone}/>
                            </a>
                            <label>0810 9999 911 o (0299) 4340000</label>
                        </li>
                        {/* <li>
                            <a>
                                <img src={phone}/>
                            </a>
                            <label>(0299) 4340000</label>
                        </li> */}
                        <li>
                            <a>
                                <img src={whatsapp}/>
                            </a>
                            <label>299 4532424 (solo mensajes)</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="SubInfo">
                        <label>Redes Sociales</label>
                        <li>
                            <a href="#">
                                <img src={instagram} alt="Instagram"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={facebook} alt="Facebook"></img>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={linkedin} alt="LinkedIn"></img>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className="SubInfo">
                        <label>Empresa</label>
                        <li>Acerca de Nosotros</li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}