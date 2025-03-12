export default function EpigraphedVideo(props) {
    return (
        <>
            <video controls muted playsInline src={props.videosrc}>
            </video>
            <p className="Epigraphy">
                {props.epigraphy}
            </p>
        </>
    );
}