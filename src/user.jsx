import { useState } from "react";

export default function User(props) {
    let [name, setName] = useState(props.name);
    let [image, setImage] = useState(props.image.src);

    return (
        <div className="user">
            <img data-test="profile-image" src={image} alt={props.image.alt} onClick={() => {
                const image = prompt("Define a imagem de Usuário: ");
                if (image !== '' && image !== undefined && image !== null) setImage(image);
            }} />
            <div className="text">
                <span>
                    <strong data-test="name">{name}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={() => {
                        const name = prompt("Define o nome de Usuário: ");
                        if (name !== '' && name !== undefined && name !== null) setName(name);
                    }}></ion-icon>
                </span>
            </div>
        </div>
    );
}