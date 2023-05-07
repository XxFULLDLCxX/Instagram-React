import { useState } from "react";

const formatNumber = num => num.toLocaleString('en-US').replace(',', '.');


export default function Post({ user, content, likes }) {
    let [heart, setHeart] = useState("heart-outline");
    let [like_number, setLikes] = useState(likes.number);
    let [animate, setAnimate] = useState(false);

    const likePost = alternate => event => {
        if (heart.includes('outline')) {
            like_number++;
            setLikes(like_number);
            setHeart("heart-sharp");
            if (event.type !== 'click') {
                setAnimate(true);
                setTimeout(() => setAnimate(false), 500);
            }
        } else if (alternate) {
            like_number--;
            setLikes(like_number);
            setHeart("heart-outline");
        }
    };
    const savePost = ({ target }) =>
        target.name = target.name.includes('outline') ? "bookmark-sharp" : "bookmark-outline";
    return (
        <div data-test="post" className="post">
            <div className="top">
                <div className="user">
                    <img src={user.src} alt={user.alt} />
                    {user.alt}
                </div>
                <div className="actions">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="content">
                <img data-test="post-image" src={content.src} alt={content.alt} onDoubleClick={likePost(false)} />
                {animate && <ion-icon name="heart-sharp"></ion-icon>}

            </div>

            <div className="ground">
                <div className="actions">
                    <div>
                        <ion-icon data-test="like-post" name={heart} onClick={likePost(true)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name="bookmark-outline" onClick={savePost}></ion-icon>
                    </div>
                </div>

                <div className="likes">
                    <img src={likes.src} alt={likes.alt} />
                    <div className="text">
                        Curtido por <strong>{likes.alt}</strong> e
                        <strong> outras<span data-test="likes-number"> {formatNumber(like_number)} </span>pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
