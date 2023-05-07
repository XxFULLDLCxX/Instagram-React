import Suggestion from "./suggestion";

export default function Suggestions() {
    const suggestions = [
        {
            id: 0, name: "bad.vibes.memes", reason: "Segue você",
            image: { src: "./assets/img/bad.vibes.memes.svg", alt: "bad.vibes.memes.svg" },
        },
        {
            image: { src: "./assets/img/chibirdart.svg", alt: "chibirdart" },
            id: 1, name: "chibirdart", reason: "Segue você"
        },
        {
            image: { src: "./assets/img/razoesparaacreditar.svg", alt: "razoesparaacreditar" },
            id: 2, name: "razoesparaacreditar", reason: "Novo no Instagram"
        },
        {
            image: { src: "./assets/img/adorable_animals.svg", alt: "adorable_animals" },
            id: 3, name: "adorable_animals", reason: "Segue você"
        },
        {
            image: { src: "./assets/img/smallcutecats.svg", alt: "smallcutecats" },
            id: 4, name: "smallcutecats", reason: "Segue você"
        },
    ];
    return (
        <div className="suggestions">
            <div className="title">
                Sugestões para você
                <span>Ver tudo</span>
            </div>
            {suggestions.map(({ id, name, reason, image }) =>
                <Suggestion key={id} name={name} reason={reason} image={image} />)}
        </div>
    );
}