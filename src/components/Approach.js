export default function Approach({title, image, description}) {
    return (
        <div className="Approach">
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p className='Epigraphy'>
                {description}
            </p>
        </div>
    );
}