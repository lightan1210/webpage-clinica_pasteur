import { useState, useEffect } from "react";
import EpigraphedVideo from "./EpigraphedVideo";
import EpigraphedImage from "./EpigraphedImage";

import frentePasteur from '../images/imagenPasteur.png'

export default function Carousel() {
    const [indexCarousel, setIndexCarousel] = useState(0);
    const maxIndexCarousel = 2;

    useEffect(() => {
        let i;
        let slides = document.getElementsByClassName("ItemCarousel");
        let dots = document.getElementsByClassName("dot");

        for(i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[indexCarousel].style.display = "block";
        dots[indexCarousel].className += " active";
    },[indexCarousel])

    return (
        <>
            <div className="Carousel">
                <div className="ItemCarousel">
                    <EpigraphedVideo videosrc={"https://video.wixstatic.com/video/abfa5a_8a396045e52c4d87a06053caf94dcf7e/1080p/mp4/file.mp4"} epigraphy={"Video conmemorativo por los 50 años de la Clínica Pasteur."}/>
                </div>
                <div className="ItemCarousel">
                    <EpigraphedImage imgsrc={frentePasteur} epigraphy={"Foto frente de la clinica Pasteur"}/>
                </div>

                <a className="prev" onClick={() => setIndexCarousel((!(indexCarousel)) ? maxIndexCarousel-1 : indexCarousel-1)}>&#10094;</a>
                <a className="next" onClick={() => setIndexCarousel(indexCarousel == maxIndexCarousel-1 ? 0 : indexCarousel+1)}>&#10095;</a>

            </div>
            <div className="dots">
                <span className="dot" onClick={() => setIndexCarousel(0)}></span>
                <span className="dot" onClick={() => setIndexCarousel(1)}></span>
            </div>
        </>
    );
}