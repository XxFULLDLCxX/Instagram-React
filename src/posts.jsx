import Post from "./post";

export default function Posts() {
    const posts = [
        {
            id: 0, user: { src: "./assets/img/meowed.svg", alt: "meowed" },
            content: { src: "./assets/img/gato-telefone.svg", alt: "gato-telefone" },
            likes: { src: "./assets/img/respondeai.svg", alt: "respondeai", number: 101523 },
        },
        {
            id: 1, user: { src: "./assets/img/barked.svg", alt: "barked" },
            content: { src: "./assets/img/dog.svg", alt: "dog" },
            likes: { src: "./assets/img/adorable_animals.svg", alt: "adorable_animals", number: 99159 },
        },
        {
            id: 2, user: { src: "./assets/img/respondeai.svg", alt: "respondeai" },
            content: { src: "./assets/img/gato-telefone.svg", alt: "gato-telefone" },
            likes: { src: "./assets/img/respondeai.svg", alt: "respondeai", number: 101523 },
        }
    ];
    return (
        <div className="posts">
            {posts.map(({ id, user, content, likes }) => <Post key={id} user={user} content={content} likes={likes} />)}
        </div>
    );

}