import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

    const setNewActive = (newActive) => {
        const navBar = document.getElementsByClassName('NavBar')[0].querySelector("ul");
        const activeElement = navBar.getElementsByClassName('Active')[0];
        activeElement.classList.remove("Active");
        navBar.children[newActive].classList.add("Active");
    };
    
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'Active' : '';

    return (
        <nav className="NavBar">
            <ul>
                <li className={isActive('/')}>
                    <Link to="/" onClick={() => setNewActive(0)}>home</Link>
                </li>
                <li className={isActive('/pacientes')}>
                    <Link to="/pacientes" onClick={() => setNewActive(1)}>pacientes</Link>
                </li>
                <li className={isActive('/about')}>
                    <Link to="/about">la clinica</Link>
                    {/* <ul className='SubMenu'>
                        <li><Link to="#">mision</Link></li>
                        <li><Link to="#">vision</Link></li>
                        <li><Link to="#">filosofia</Link></li>
                        <li><Link to="#">valores</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link to="#">puntos de atencion</Link>
                    <ul className='SubMenu'>
                        <li><Link to="#">rioja 36</Link></li>
                        <li><Link to="#">cai rioja 113</Link></li>
                        <li><Link to="#">cari roca 109</Link></li>
                        <li><Link to="#">cai rufino ortega 130</Link></li>
                        <li><Link to="#">cai san martin 130</Link></li>
                        <li><Link to="#">cai oftalmologia</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="#">servicios</Link>
                    <ul className='SubMenu'>
                        <li><Link to="#">cardiologia</Link></li>
                        <li><Link to="#">cirugia cardiovascular</Link></li>
                        <li><Link to="#">clinica medica</Link></li>
                        <li><Link to="#">emergencias</Link></li>
                        <li><Link to="#">endoscopia</Link></li>
                        <li><Link to="#">hemoterapia</Link></li>
                        <li><Link to="#">hepatologia</Link></li>
                        <li><Link to="#">imagenes</Link></li>
                        <li><Link to="#">kinesiologia</Link></li>
                        <li><Link to="#">laboratorio</Link></li>
                        <li><Link to="#">nefrologia</Link></li>
                        <li><Link to="#">obesidad, diabetes y metabolismo</Link></li>
                        <li><Link to="#">oftalmologia</Link></li>
                        <li><Link to="#">unidad materno infantil</Link></li>
                        <li><Link to="#">unidad quirurgica</Link></li>
                        <li><Link to="#">unidad de terapia intensiva</Link></li>
                        <li><Link to="#">oncologia</Link></li>
                        <li><Link to="#">hemodinamia e intervencionismo</Link></li>
                        <li><Link to="#">uco unidad coronaria</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="#">telemedicina</Link>
                    <ul className='SubMenu'>
                        <li><Link to="#">para medicos</Link></li>
                        <li><Link to="#">para medicos (videos)</Link></li>
                        <li><Link to="#">para pacientes</Link></li>
                        <li><Link to="#">para pacientes (videos)</Link></li>
                    </ul>
                </li>
                
                <li className={isActive('/staff')}>
                    <Link to="/staff" onClick={() => setNewActive(6)}>staff</Link>
                    {/* <ul className='SubMenu'>
                        <li><Link to="#">listado por nombre</Link></li>
                        <li><Link to="#">listado por especialidad</Link></li>
                        <li><Link to="#">listado por pda</Link></li>
                    </ul> */}
                </li>
                <li> <Link to="#">docencia</Link> </li>
                <li> <Link to="#">contacto</Link> </li>
                <li> <Link to="#">recursos</Link> </li>
            </ul>
        </nav>
    );
}