import { useState, useEffect } from "react";
import EpigraphedVideo from "./EpigraphedVideo";
import EpigraphedImage from "./EpigraphedImage";

export default function Carousel({ itemsCarousel = [] }) {
    const [indexCarousel, setIndexCarousel] = useState(0);
    const maxIndexCarousel = itemsCarousel.length;

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
                {
                    itemsCarousel.map(({isAVideo, mediaSrc, description}, key) => {
                        return (
                            <div className="ItemCarousel" key={key}>
                                {isAVideo ? <EpigraphedVideo videosrc={mediaSrc} epigraphy={description} /> : <EpigraphedImage imgsrc={mediaSrc} epigraphy={description} />}
                            </div>
                        )

                    })
                }

                <div className="prev" onClick={() => setIndexCarousel((!(indexCarousel)) ? maxIndexCarousel-1 : indexCarousel-1)}>&#10094;</div>
                <div className="next" onClick={() => setIndexCarousel(indexCarousel === maxIndexCarousel-1 ? 0 : indexCarousel+1)}>&#10095;</div>

            </div>
            <div className="dots">
                {Array.from({length: maxIndexCarousel},
                    (_,i) => <span className="dot" key={i} onClick={() => setIndexCarousel(i)}></span>
                )}
            </div>
        </>
    );
}