import Stories from './stories';
import Posts from './posts';
import SideBar from './sidebar';

export default function Body() {
    return (
        <div className="body">
            <div className="left">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    );
}
