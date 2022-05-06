import { Link } from "react-router-dom";
import {ReactComponent as PostsIcon} from '../images/posts.svg';
import {ReactComponent as SavedIcon} from '../images/saved.svg';
import {ReactComponent as TaggedIcon} from '../images/tagged.svg';

export default function Tablist() {
    return(
        <div className="flex justify-center border-t border-app-gray-300">
            <Link to='/' className="h-[52px] mr-[60px] flex items-center">
                <span className="flex items-center text-app-gray-700">
                    <PostsIcon />
                    Posts
                </span>
            </Link>
            <Link to='/' className="h-[52px] mr-[60px] flex items-center">
                <span className="flex items-center text-app-gray-500">
                    <SavedIcon />
                    Saved
                </span>
            </Link>
            <Link to='/' className="h-[52px] flex items-center">
                <span className="flex items-center text-app-gray-500">
                    <TaggedIcon />
                    Tagged
                </span>
            </Link>
        </div>
    )
}