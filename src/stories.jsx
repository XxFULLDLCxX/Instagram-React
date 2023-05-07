import Story from "./story";

export default function Stories() {
    const stories = [
        { id: 0, src: "./assets/img/9gag.svg", alt: "9gag" },
        { id: 1, src: "./assets/img/meowed.svg", alt: "meowed" },
        { id: 2, src: "./assets/img/barked.svg", alt: "barked" },
        { id: 3, src: "./assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet" },
        { id: 4, src: "./assets/img/wawawicomics.svg", alt: "wawawicomics" },
        { id: 5, src: "./assets/img/respondeai.svg", alt: "respondeai" },
        { id: 6, src: "./assets/img/filomoderna.svg", alt: "filomoderna" },
        { id: 7, src: "./assets/img/memeriagourmet.svg", alt: "memeriagourmet" },
    ];
    return (
        <div className="stories">
            {stories.map(({ id, alt, src }) => <Story key={id} image={{ src, alt }} name={alt} />)}
            <div className="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
