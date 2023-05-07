import User from "./user";
import Suggestions from "./suggestions";

export default function SideBar() {
    const user = { image: { src: "./assets/img/catanacomics.svg", alt: "imagem de perfil" }, name: "catanacomics" };
    return (
        < div className="sidebar" >
            < User image={user.image} name={user.name} />
            < Suggestions />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div >
    );

}