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
            <form className="SearchBar" >
            
                <input type="text" name="searchBar" placeholder="Buscar..."></input>
                <button className='SearchButton' type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
                </button>

            </form>
            <div className='WhatsApp' title='Pedir turno'>
                <a href="http://bit.ly/cpasteurwhatsapp" target='_blank'>
                    <img src={whatsapp}/>
                </a>
            </div>
            <div className="BurgerButton">≡</div>
            <nav className="NavBar">
                <ul>
                    <li><a href="#">home</a></li>
                    <li>
                        <a href="#">pacientes</a>
                        <ul className='SubMenu'>
                            <li><a href="#">informacion util</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">la clinica</a>
                        <ul className='SubMenu'>
                            <li><a href="#">mision</a></li>
                            <li><a href="#">vision</a></li>
                            <li><a href="#">filosofia</a></li>
                            <li><a href="#">valores</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">puntos de atencion</a>
                        <ul className='SubMenu'>
                            <li><a href="#">rioja 36</a></li>
                            <li><a href="#">cai rioja 113</a></li>
                            <li><a href="#">cari roca 109</a></li>
                            <li><a href="#">cai rufino ortega 130</a></li>
                            <li><a href="#">cai san martin 130</a></li>
                            <li><a href="#">cai oftalmologia</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">servicios</a>
                        <ul className='SubMenu'>
                            <li><a href="#">cardiologia</a></li>
                            <li><a href="#">cirugia cardiovascular</a></li>
                            <li><a href="#">clinica medica</a></li>
                            <li><a href="#">emergencias</a></li>
                            <li><a href="#">endoscopia</a></li>
                            <li><a href="#">hemoterapia</a></li>
                            <li><a href="#">hepatologia</a></li>
                            <li><a href="#">imagenes</a></li>
                            <li><a href="#">kinesiologia</a></li>
                            <li><a href="#">laboratorio</a></li>
                            <li><a href="#">nefrologia</a></li>
                            <li><a href="#">obesidad, diabetes y metabolismo</a></li>
                            <li><a href="#">oftalmologia</a></li>
                            <li><a href="#">unidad materno infantil</a></li>
                            <li><a href="#">unidad quirurgica</a></li>
                            <li><a href="#">unidad de terapia intensiva</a></li>
                            <li><a href="#">oncologia</a></li>
                            <li><a href="#">hemodinamia e intervencionismo</a></li>
                            <li><a href="#">uco unidad coronaria</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">telemedicina</a>
                        <ul className='SubMenu'>
                            <li><a href="#">para medicos</a></li>
                            <li><a href="#">para medicos (videos)</a></li>
                            <li><a href="#">para pacientes</a></li>
                            <li><a href="#">para pacientes (videos)</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#">staff</a>
                        <ul className='SubMenu'>
                            <li><a href="#">listado por nombre</a></li>
                            <li><a href="#">listado por especialidad</a></li>
                            <li><a href="#">listado por pda</a></li>
                        </ul>
                    </li>
                    <li> <a href="#">docencia</a> </li>
                    <li> <a href="#">contacto</a> </li>
                    <li> <a href="#">recursos</a> </li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}