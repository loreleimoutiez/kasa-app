export const SlideshowItem = ({ image }) => { // élément individuel du carousel d'images 
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={image} alt="logement" />
        </div>
    )
}