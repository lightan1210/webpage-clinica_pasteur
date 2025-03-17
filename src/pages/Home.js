import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <main>
            <Carousel itemsCarousel={[
                {"isAVideo":true, "mediaSrc":"https://video.wixstatic.com/video/abfa5a_8a396045e52c4d87a06053caf94dcf7e/1080p/mp4/file.mp4", "description": "Video conmemorativo por los 50 años de la Clínica Pasteur."},
                
                {"isAVideo":false, "mediaSrc":require('../images/imagenPasteur.png'), "description":"Foto frente de la clinica Pasteur"}]
            }/>
        </main>
    );
}