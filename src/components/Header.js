export default function Header() {
    return (
        <header>
            <form className="SearchBar" >
                <input type="text" name="searchBar" placeholder="Buscar..."></input>
            </form>
            <div className="BurgerButton">≡</div>
            <nav className="NavBar">
                <ul>
                    <li> <a>home</a> </li>
                    <li> <a>pacientes</a> </li>
                    <li> <a>la clinica</a> </li>
                    <li> <a>puntos de atencion</a> </li>
                    <li> <a>servicios</a> </li>
                    <li> <a>telemedicina</a> </li>
                    <li> <a>staff</a> </li>
                    <li> <a>docencia</a> </li>
                    <li> <a>contacto</a> </li>
                    <li> <a>recursos</a> </li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}