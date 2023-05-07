export default function Suggestion({ image, name, reason }) {
    return (
        <div className="suggestion">
            <div className="user">
                <img src={image.src} alt={image.alt} />
                <div className="text">
                    <div className="name">{name}</div>
                    <div className="reason">{reason}</div>
                </div>
            </div>

            <div className="follow">Seguir</div>
        </div>
    );
}