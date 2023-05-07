export default function Story({ image, name }) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={image.src} alt={image.src} />
            </div>
            <div className="user">{name}</div>
        </div>
    );
}