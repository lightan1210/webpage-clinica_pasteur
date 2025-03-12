export default function NavBar() {
    return (
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
    );
}