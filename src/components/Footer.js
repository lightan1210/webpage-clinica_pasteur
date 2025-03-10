import instagram from '../images/instagram_icon.png'
import facebook from '../images/facebook_icon.png'
import linkedin from '../images/linkedin_icon.png'

export default function Footer() {
    return (
        <footer>
            <ul className="Info">
                <li>
                    <ul className="SubInfo">
                        <label>Empresa</label>
                        <li>Acerca de Nosotros</li>
                    </ul>
                </li>
                <li>
                    <ul className="SubInfo">
                        <label>Contacto</label>
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
                        <li></li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}