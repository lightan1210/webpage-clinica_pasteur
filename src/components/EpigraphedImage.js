export default function EpigraphedImage(props) {
    return (
        <>
            <img src={props.imgsrc}>
            </img>
            <p className="Epigraphy">
                {props.epigraphy}
            </p>
        </>
    );
}