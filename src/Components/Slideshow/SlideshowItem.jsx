export const SlideshowItem = ({ image }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={image} alt="logement" />
        </div>
    )
}