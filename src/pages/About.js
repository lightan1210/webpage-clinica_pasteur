import logo from '../images/logo.png'

import mision from '../images/mision_image.avif'
import vision from '../images/vision_image.avif'
import philosophy from '../images/philosophy_image.avif'
import values from '../images/values_image.avif'
import Approach from '../components/Approach'
import Carousel from '../components/Carousel'

export default function About() {
    return (
        <div className="About">
            <img src={logo} className='Logo' />
            <p className='Epigraphy'>
                <i>
                    Clínica Pasteur nació hace más de 50 años en la ciudad de Neuquén con la pasión de dar un aporte positivo y significativo en la vida de los patagónicos. A lo largo de los años, mantuvimos nuestra misión y sueño de crecer en el cuidado integral de la salud con humanidad, excelencia médica y tecnología avanzada, con acompañamiento del paciente y su familia.

                </i>
            </p>

            {/* COLOCAR VIDEOS */}
            
            <Approach title={"Misión"} image={mision} description={"Nuestra misión es el cuidado integral de la salud con humanidad, excelencia médica y tecnología avanzada, con acompañamiento del paciente y su familia."}/>
            
            <Approach title={"Visión"} image={vision} description={"Nos vemos como referentes en calidad e integralidad de servicios en salud en Neuquén y zonas aledañas."}/>

            <Approach title={"Filosofía"} image={philosophy} description={"En Clínica Pasteur priorizamos la necesidad del paciente, generando un vínculo de confianza con él y su familia, basados en una conducta que se caracteriza por la calidez humana,  el profesionalismo y el respeto por la vida. Nuestra manera de trabajar está basada en el trabajo en equipo, el compañerismo en un ámbito de cordialidad y respeto, done los profesionales puedan desarrollarse en un marco de equidad y logros por mérito."}/>

            <Approach title={"Valores"} image={values} description={<ol>
                    <li>Humanidad - calidez humana.</li>
                    <li>Confianza.</li>
                    <li>Respeto a la vida (desde la concepción hasta la muerte) y a la persona .</li>
                    <li>La necesidad del paciente primero - Compromiso con lo que es mejor para el paciente.</li>
                    <li>Trabajo en equipo, compañerismo y cordialidad.</li>
                    <li>Meritocracia y equidad.</li>
                    <li>Profesionalismo.</li>
                    <li>Conducta y cultura familiar.</li>
                </ol>} />
        </div>
    );
}