export default function EpigraphedImage({ imgsrc, epigraphy }) {
    return (
        <>
            <img src={imgsrc} alt="epigraphedImage"/>
            <p className="Epigraphy">
                {epigraphy}
            </p>
        </>
    );
}