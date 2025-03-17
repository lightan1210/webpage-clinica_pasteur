import logo from '../images/logo.png'

import mision from '../images/mision_image.avif'
import vision from '../images/vision_image.avif'
import philosophy from '../images/philosophy_image.avif'
// import values from '../images/values_image.avif'

import Approach from '../components/Approach'
import Carousel from '../components/Carousel'
import { useEffect, useRef, useState } from 'react'

export default function About() {
    const [widthWindow, setWidthWIndow] = useState(window.innerWidth);

    const aboutElement = useRef();
    const approachesElement = useRef();

    useEffect(() => {
        if(widthWindow < 768) {
            aboutElement.current.querySelector('.Carousel').style.display = 'block';
            aboutElement.current.querySelector('.dots').style.display = 'block';
            approachesElement.current.style.display = 'none';
        }
        else{
            aboutElement.current.querySelector('.Carousel').style.display = 'none';
            aboutElement.current.querySelector('.dots').style.display = 'none';
            approachesElement.current.style.display = '';
        }
    },[widthWindow]);

    const updateWindowDimensions = () => {
        setWidthWIndow(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return (
        <div ref={aboutElement} className="About">
            <img src={logo} alt="logo clinica pasteur" className='Logo' />
            <p className='Epigraphy'>
                <i>
                    Clínica Pasteur nació hace más de 50 años en la ciudad de Neuquén con la pasión de dar un aporte positivo y significativo en la vida de los patagónicos. A lo largo de los años, mantuvimos nuestra misión y sueño de crecer en el cuidado integral de la salud con humanidad, excelencia médica y tecnología avanzada, con acompañamiento del paciente y su familia.

                </i>
            </p>

            {/* COLOCAR VIDEOS */}

            {
                <Carousel itemsCarousel={[
                    {"isAVideo":false, "mediaSrc":require('../images/mision_image.avif'), "description":"Nuestra misión es el cuidado integral de la salud con humanidad, excelencia médica y tecnología avanzada, con acompañamiento del paciente y su familia."},
                    {"isAVideo":false, "mediaSrc":require('../images/vision_image.avif'), "description":"Nos vemos como referentes en calidad e integralidad de servicios en salud en Neuquén y zonas aledañas."},
                    {"isAVideo":false, "mediaSrc":require('../images/philosophy_image.avif'), "description":"En Clínica Pasteur priorizamos la necesidad del paciente, generando un vínculo de confianza con él y su familia, basados en una conducta que se caracteriza por la calidez humana,  el profesionalismo y el respeto por la vida. Nuestra manera de trabajar está basada en el trabajo en equipo, el compañerismo en un ámbito de cordialidad y respeto, done los profesionales puedan desarrollarse en un marco de equidad y logros por mérito."}
                ]}/>
            }

            <div ref={approachesElement} className='Approaches'>

                <Approach title={"Misión"} image={mision} description={"Nuestra misión es el cuidado integral de la salud con humanidad, excelencia médica y tecnología avanzada, con acompañamiento del paciente y su familia."}/>
                
                <Approach title={"Visión"} image={vision} description={"Nos vemos como referentes en calidad e integralidad de servicios en salud en Neuquén y zonas aledañas."}/>

                <Approach title={"Filosofía"} image={philosophy} description={"En Clínica Pasteur priorizamos la necesidad del paciente, generando un vínculo de confianza con él y su familia, basados en una conducta que se caracteriza por la calidez humana,  el profesionalismo y el respeto por la vida. Nuestra manera de trabajar está basada en el trabajo en equipo, el compañerismo en un ámbito de cordialidad y respeto, done los profesionales puedan desarrollarse en un marco de equidad y logros por mérito."}/>

                {/* VER DE AGREGAR EL CUARTO ELEMENTO */}

                {/* <Approach title={"Valores"} image={values} description={<ol>
                    <li>Humanidad - calidez humana.</li>
                    <li>Confianza.</li>
                    <li>Respeto a la vida (desde la concepción hasta la muerte) y a la persona .</li>
                    <li>La necesidad del paciente primero - Compromiso con lo que es mejor para el paciente.</li>
                    <li>Trabajo en equipo, compañerismo y cordialidad.</li>
                    <li>Meritocracia y equidad.</li>
                    <li>Profesionalismo.</li>
                    <li>Conducta y cultura familiar.</li>
                </ol>} /> */}
            </div>
            
        </div>
    );
}