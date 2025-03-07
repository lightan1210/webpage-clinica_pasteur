export default function Header() {
    return (
        <header>
            <form className="SearchBar" >
                <input type="text" name="searchBar" placeholder="Buscar..."></input>
            </form>
            <nav className="NavBar">
                <ul>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                    <li> <a>primero</a> </li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}